class Footer {
    constructor(tabname, tablink) {
        this.tabname = tabname;
        this.tablink = tablink;
    }
}

class Contact {
    constructor(linkname, link) {
        this.linkname = linkname;
        this.link = link;
    }
}


class Address {
    constructor(le, me) {
        this.le = le;
        this.me = me;
    }
}


export {
    Footer,
    Contact,
    Address,
};