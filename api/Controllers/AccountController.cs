using api.Data;
using api.DTO;
using api.Models;
using api.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace api.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly ApplicationDbContext _db;
        private readonly ITokenService _tokenService;

        private AccountController(ApplicationDbContext db,ITokenService tokenService)
        {
            _tokenService = tokenService;
            _db = db;
        }
        [HttpPost("register")]
        public async Task<ActionResult<User>> Register(UserDto userDto)
        {
            using var hmac = new HMACSHA512();
            var user = new User()
            {
                userName = userDto.UserName,
                hashedPassword = hmac.ComputeHash(Encoding.UTF8.GetBytes(userDto.Password)),
                hashSalt = hmac.Key
            };
            await _db.users.AddAsync(user);
            _db.SaveChanges();
            return  user;
        }
        [HttpPost("login")]
        public async Task<ActionResult<LoginDto>> Login(UserDto userDto)
        {
            bool flag = false;
            User user = null;
            foreach(User usr in _db.users)
            {
                if(usr.userName == userDto.UserName)
                {
                    flag = true;
                    user = usr;
                    break;
                }
            }
            if (flag)
            {
                return new LoginDto
                {
                    userName = user.userName,
                    token = _tokenService.CreateJWTToken(user)
                };
            }
            else
            {
                return null;
            }
        }
    }
}
