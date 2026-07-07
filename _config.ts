import lume from "lume/mod.ts";
import vento from "lume/plugins/vento.ts";
import markdown from "lume/plugins/markdown.ts";
import date from "lume/plugins/date.ts";
import metas from "lume/plugins/metas.ts";
import sitemap from "lume/plugins/sitemap.ts";

const site = lume({
  src: "./src",
  dest: "./_site",
  location: new URL("https://[DOMINIO]"),
});

site.use(vento());
site.use(markdown());
site.use(date());
site.use(metas());
site.use(sitemap());

site.copy("../static", "static");

export default site;
