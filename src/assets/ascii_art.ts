var asciiArt = require("ascii-art");

export function display() {
  asciiArt.font("SENTRY", "rusted", (err: any, rendered: any) => {
    if (err) {
      console.log("Somrthing went wrong...");
      console.dir(err);
      return;
    }
    console.log(rendered);
  });
}
