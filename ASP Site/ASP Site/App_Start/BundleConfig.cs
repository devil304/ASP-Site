using System.Web;
using System.Web.Optimization;

namespace ASP_Site
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/temp").Include(
                     "~/Scripts/temp-script.js"));

            bundles.Add(new ScriptBundle("~/bundles/home").Include(
                     "~/Scripts/home.js"));

            bundles.Add(new ScriptBundle("~/bundles/prod").Include(
                     "~/Scripts/prod.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/style.css",
                      "~/Content/all.css"));

            bundles.Add(new StyleBundle("~/Content/css-konto").Include(
                      "~/Content/konto.css"));

            bundles.Add(new StyleBundle("~/Content/css-koszyk").Include(
                     "~/Content/koszyk.css"));

            bundles.Add(new StyleBundle("~/Content/css-home").Include(
                     "~/Content/style-home.css"));

            bundles.Add(new StyleBundle("~/Content/css-prod").Include(
                     "~/Content/style-prod.css"));
        }
    }
}
