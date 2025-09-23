// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-welcome",
    title: "Welcome",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of my cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "My github account info and project related repos. 这个页面使用了vercel提供的服务，因此你可能需要科学上网才能正常访问​:ghost:​",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "dropdown-news",
              title: "News",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-cv",
              title: "cv",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "post-美丽新世界-读后感",
      
        title: "《美丽新世界》读后感",
      
      description: "啊,美丽的新世界.有这样的人在里头!",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/%E7%BE%8E%E4%B8%BD%E6%96%B0%E4%B8%96%E7%95%8C-%E8%AF%BB%E5%90%8E%E6%84%9F/";
        
      },
    },{id: "post-深夜里听音乐的一些感想",
      
        title: "深夜里听音乐的一些感想",
      
      description: "音乐真是陪伴我的最好朋友之一了.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/%E6%B7%B1%E5%A4%9C%E9%87%8C%E5%90%AC%E9%9F%B3%E4%B9%90%E7%9A%84%E4%B8%80%E4%BA%9B%E6%84%9F%E6%83%B3/";
        
      },
    },{id: "post-git的ssh认证",
      
        title: "git的ssh认证",
      
      description: "做项目时遇到的要求.记录一下.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/git%E7%9A%84ssh%E8%AE%A4%E8%AF%81/";
        
      },
    },{id: "post-all-tags-amp-categories",
      
        title: "All Tags&amp;Categories",
      
      description: "整个博客索引页.原生的archive管理系统可见性比较差.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Content/";
        
      },
    },{id: "post-blog-tutorial",
      
        title: "blog tutorial",
      
      description: "teach you how to write a blog.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/code/";
        
      },
    },{id: "news-个人网站的成功建立-搞了一个下午",
          title: '个人网站的成功建立！搞了一个下午💦😄',
          description: "",
          section: "News",},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-个人博客",
          title: '个人博客',
          description: "整个网站构建过程的有趣瞬间，技术栈记录。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/";
            },},{id: "projects-算法摘录",
          title: '算法摘录',
          description: "会的和不会的,都在这了",
          section: "Projects",handler: () => {
              window.location.href = "/projects/%E7%AE%97%E6%B3%95%E6%91%98%E5%BD%95/";
            },},{id: "projects-读西瓜书",
          title: '读西瓜书',
          description: "南大人的AI圣经？",
          section: "Projects",handler: () => {
              window.location.href = "/projects/%E8%AF%BB%E8%A5%BF%E7%93%9C%E4%B9%A6/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
