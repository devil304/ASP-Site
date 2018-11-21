using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASP_Site.Models
{
    public class MyDBContext : DbContext
    {
        public MyDBContext() : base("name=MyDBContext")
        { }

        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Prod> Prods { get; set; }
    }
}