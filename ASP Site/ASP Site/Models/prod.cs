using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASP_Site.Models
{
    public class Prod
    {
        public int Id { get; set; }
        public string Cat { get; set; }
        public string Name { get; set; }
        public string Desc { get; set; }
        public float Price { get; set; }
    }
}