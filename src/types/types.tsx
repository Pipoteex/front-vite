export interface JSONData {
    About: About;
    Gallery: Gallery[];
    Services: Service[];
    Contact: Contact;
}

export interface About {
    paragraph: string;
    another: string;
    Why: string[];
    Why2: string[];
}

export interface Contact {
    address: string;
    phone: string;
    email: string;
    facebook: string;
    instagram: string;
}

export interface Gallery {
    title: string;
    largeImage: string;
    smallImage: string;
}

export interface Service {
    images: string[];
    name: string;
    type: string;
    text: string;
    time?: number;
}
