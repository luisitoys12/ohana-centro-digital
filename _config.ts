import lume from "lume/mod.ts";
import vento from "lume/plugins/vento.ts";
import markdown from "lume/plugins/markdown.ts";

const site = lume({
  src: "./src",
  dest: "./_site",
  location: new URL("https://luisitoys12.github.io/ohana-centro-digital/"),
});

site.use(vento());
site.use(markdown());

site.copy("../static", "static");

export default site;
