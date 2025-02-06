const contentData = [
    {
        title: "Mr. Robot S1",
        image:
            "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F1aiNh5Gak36EdpdwhvWHIXzAj50.jpg",

        folderid: "1-jS6jChfxw-3akR_w7gOmzmLEJ0YLThC",
        type: "Series",

    },
    {
        title: "Mr. Robot S2",
        image:
            "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FmjqAWBXM6zoxmoeC3q9J6I1wl7R.jpg",

        folderid: "1yHvChPOqw7fJRQRgnZ308nu2h_7JuXUO",
        type: "Series",

    },
    {
        title: "Mr. Robot S3",
        image:
            "https://image.tmdb.org/t/p/original/whtaWBtS3zauurpEdEMI61489Km.jpg",

        folderid: "1xDm_o5fTkK0XozJxg0fPFrpM4SK9zrgL",
        type: "Series",

    },
    {
        title: "Mr. Robot S4",
        image:
            "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F4PxMbpF3pv5B8eYw48hZ1hy16gr.jpg",

        folderid: "1-YymiD6PWLAkcqYYpqdZY5TQIrSOM8im",
        type: "Series",

    },
    {
        title: "Attack on Titan S01",
        image:
            "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FAgaD7s1vgIf4Soi3flAKN6Bte6u.jpg",

        folderid: "1-5chzScNIAIbel5gb7VLByT3dz8sYBqZ",
        type: "Anime",

    },
    {
        title: "Attack on Titan S02",
        image:
            "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F19REaSRoNcO0KgMmrGUWtfpRKZY.jpg",

        folderid: "1-0P7YawMOKcuJ49A43NdRyFt16L_Hzrv",
        type: "Anime",
    },
    {
        title: "Attack on Titan S03",
        image:
            "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fynow2o9v0G341PLv1chCRDufCgc.jpg",

        folderid: "1mpncw0YC5VqZfMrONJgN0q4U-0o4JZSB",
        type: "Anime",
    },
    {
        title: "Attack on Titan S04",
        image:
            "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FsfbSjGlLHsvFQrMUSNR9RrwZgV1.jpg",

        folderid: "1jDKExNViHkEehhN-nqZpzCOUXt2UG6tz",
        type: "Anime",
    },

    {
        title: "Death Note",
        image:
            "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FtCZFfYTIwrR7n94J6G14Y4hAFU6.jpg",

        folderid: "1XlCp3canUS1QfNFq0X9YFZK_ZwCu4TLo",
        type: "Anime",
    },
    {
        title: "Shin-chan: Fierceness That Invites Storm!",
        image:
            "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FnfpPzlKiqkIGpI8HXpsrU6vnNdp.jpg",

        folderid: "17MR1gtVAAAENqvD9SNlkFwDj-0ylBjqL",
        type: "Cartoon movies",
    },
    
    {
        title: "Ice Age (2002)",
        image:
            "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2Fe%2Fgracenote%2Fe24be4e62720ebe500a7e7a3cf1a65cf.jpg",

        folderid: "1PuT1fk7CtI3kyvwKxiPasRsPSrdIYj_0",
        type: "Cartoon movies",
    },
    {
        title: "Ice Age: The Meltdown (2006)",
        image:
            "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F1%2Fgracenote%2F1fe9f7ac98263ff48063ed05767ac60e.jpg",

        folderid: "1Z_2tfu4-UZUXQd33wRk-5bi_uPjQyAjk",
        type: "Cartoon movies",
    },
    {
        title: "Ice Age: Dawn of the Dinosaurs (2009)",
        image:
            "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F5%2Fgracenote%2F54a4822fda75894d4ef2dd652e7ee0c9.jpg",

        folderid: "1XjstRqK2ULtFatabNzzJDsdwPOw9JNck",
        type: "Cartoon movies",
    },
    {
        title: "Ralph Breaks the Internet 2018",
        image:
            "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2Fc%2Fgracenote%2Fc4e00199eaa2d5d48a3709e431812fd9.jpg",

        folderid: "1Kx5kc_0hrpOleaia1wcVQsRf3JTfM7BO",
        type: "Cartoon movies",
    },

    {
        title: "Truth or Dare",
        image:
            "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F1%2Fgracenote%2F18dbf68449ab7cb675cf23da4bcaad5e.jpg",

        folderid: "1QnCBGU5lIYV7CyUQrpq9U6Rf2yuXKdGk",
        type: "Movie",
    },

    {
        title: "The Devil Wears Prada",
        image:
            "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2Fa%2Fgracenote%2Fa0518bb3b03fd1194ed5c832e17cbe0c.jpg",

        folderid: "1JB3aP5C8FWvc18ahowXKaYAwxX4seYUE",
        type: "Movie",
    },
    {
        title: "Squid Game S2",
        image:
            "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FsXZhtWLo3fecavpDuOyJiayjt32.jpg",

        folderid: "1sb-6eFryvMf9mh7tNko_ZzIPuc4q0hUI",
        type: "Series",
    },
    {
        title: "Alice in Borderland S1",
        image:
            "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FsGwYqVqheXuevFOBC0BFhFvDU9T.jpg",

        folderid: "1Uozd9h4nuGcBY62QlYSb8LBiiExrDyUX",
        type: "Series",
    },
    {
        title: "Alice in Borderland S2",
        image:
            "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fs3ZAS0AGLQ668sFveVFinAd2zVy.jpg",

        folderid: "1o4qBz6A2-Ffg7bVW6oqxazjFa_Auw6Jf",
        type: "Series",
    },
    {
        title: "Scam 1992 – The Harshad Mehta Story S01",
        image:
            "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FfiimZ9Xt5cPTPHNrbS4QautBXpU.jpg",

        folderid: "1TEXHFDJlUAzQm5wSik4gCTCFVeAJIInk",
        type: "Series",
    },
];

