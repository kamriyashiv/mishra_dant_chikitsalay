class About {
    constructor(content) {
        //heading
        //subheading
        //paragraph
        this.content = content;
    }
}

class Crousel {
    constructor(images, alt) {
        //for images slider(crousel)
        this.images = images;
        this.alt = alt;
    }
}

export {
    About,
    Crousel,
}