using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASP_Site.Models
{

    public enum Type
    {
        User, Emp, Admin
    }

    public class User
    {
        public int Id { get; set; }
        public string Mail { get; set; }
        public string Name { get; set; }
        public string Pass { get; set; }
        public DateTime LastLogin { get; set; }
        public Type? AType { get; set; }

        public User(string m,string n,string p,DateTime ll,Type? at) {
            Mail = m;
            Name = n;
            Pass = p;
            LastLogin = ll;
            AType = at;
        }
    }
}