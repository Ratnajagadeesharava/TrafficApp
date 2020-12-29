using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string userName { get; set; }
        public byte[]  hashedPassword { get; set; }
        public byte[] hashSalt { get; set; }
    }
}
