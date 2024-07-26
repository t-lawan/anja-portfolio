import moment from "moment";


export class Transform {
    static events(data){
      // Get array
      data = data.allContentfulEvent.edges;

      data = data.map((event) => {
        return {
          ...event.node,
          description: event.node.description.description,
          startDate: moment(event.node.startDate),
          endDate: event.node.endDate ? moment(event.node.endDate) : null,
        };
      })
      return data;
    }

    static streaming(data){
      // Get array
      data = data.contentfulWebsite.streaming;

      data = data.map((event) => {
        return {
          ...event,
          title: event.title.title,
        };
      })
      return data;
    }

    static seo(data){
      // Get array
      data = { 
        ...data.contentfulWebsite,
        description: data.contentfulWebsite.description.description
      }

      return data;
    }

    static contact(data){
      console.log(data)
      // Get array
      data = { 
        ...data.contentfulWebsite,
        contact: data.contentfulWebsite.contact.contact
      }

      return data;
    }


    static mixes(data){
      // Get array
      data = data.contentfulWebsite.mixes;

      data = data.map((event) => {
        return {
          ...event
        };
      })
      return data;
    }

    static featuredWork(data){
      // Get array
      data = data.contentfulWebsite.featuredWork;

      data = data.map((event) => {
        return {
          ...event,
          title: event.title.title,
        };
      })
      return data;
    }
}



export const sideNavbarLinks = [
  {
    title: "bandcamp",
    external: true,
    url: "https://ngozii.bandcamp.com/",
  },
  {
    title: "contact",
    external: false,
    url: "/contact",
  },
  {
    title: "mixes",
    external: false,
    url: "/mixes",
  },
  {
    title: "sibin",
    external: true,
    url: "https://sibin.bandcamp.com/music",
  },
];

export const featured_work_list = [
  {
    title: "article 1",
    external: true,
    url: "https://bandcamp.com/",
  },
  {
    title: "youtube 1",
    external: true,
    url: "https://bandcamp.com/",
  },
  {
    title: "youtube 2",
    external: true,
    url: "https://bandcamp.com/",
  },
  {
    title: "article 2",
    external: true,
    url: "https://bandcamp.com/",
  },
  {
    title: "article 3",
    external: true,
    url: "https://bandcamp.com/",
  }
];

export const marquee_data = {
  show: true,
  text: "Reach out at info.anja.ngozi@gmail.com. Tap to copy the email address.",
}

export const mixes = [
  {
    id: '/anja-ngozi/anja-ngozi-mix-azúcar/'
  },
  {
    id: '/anja-ngozi/anja-ngozi-mix-arthur-jafa/'
  },
  {
    id: '/anja-ngozi/anja-ngozi-mix-arthur-jafa/'
  },
  {
    id: '/anja-ngozi/anja-ngozi-mix-arthur-jafa/'
  }
]

export const streaming_list = [
  {
    title: "streaming 1",
    external: true,
    url: "https://bandcamp.com/",
  },
  {
    title: "streaming 1",
    external: true,
    url: "https://bandcamp.com/",
  },
  {
    title: "streaming 3",
    external: true,
    url: "https://bandcamp.com/",
  },
  {
    title: "streaming 4",
    external: true,
    url: "https://bandcamp.com/",
  }
];

export const data_events = [
  {
    title: "Laugh",
    short_description: "Laugh Laugh Laugh Laugh Laugh Laugh Laugh Laugh Laugh Laugh Laugh Laugh",
    start_date: moment().add(12, "days"),
    end_date: "",
  },
  {
    title: "Sing",
    short_description: "Sing ".repeat(12),
    start_date: moment().add(5, "days"),
    end_date: moment().add(6, "days"),
  },
  {
    title: "Cry",
    short_description: "Cry ".repeat(7),
    start_date: moment().subtract(5, "days"),
    end_date: moment().subtract(4, "days"),
  },
  {
    title: "Dance",
    short_description: "Dance ".repeat(20),
    start_date: moment().subtract(15, "days"),
    end_date: "",
  },
  {
    title: "Run",
    short_description: "Run ".repeat(40),
    start_date: moment().subtract(52, "days"),
    end_date: "",
  },
];
