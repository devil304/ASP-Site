using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ASP_Site.Models;

namespace ASP_Site.Controllers
{
    public class HomeController : Controller
    {

        MyDBContext mdb = new MyDBContext();

        public ActionResult Index()
        {
            mdb.Users.Add(new User("mymail@my.m","MyName","MyPass",DateTime.Now,Models.Type.User));
            mdb.SaveChanges();
            return View();
        }

        public ActionResult Prod()
        {
            //ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Cart()
        {
            //ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult AccData()
        {
            return View();
        }

        public ActionResult AccAccs()
        {
            return View();
        }

        public ActionResult AccOrd()
        {
            return View();
        }
    }
}