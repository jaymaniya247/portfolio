const getSiblings = (node: Element) =>
  Array.from(node.parentNode?.children || []).filter((c) => c !== node);

const preloader_ = () => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
    navigator.userAgent
  )
    ? true
    : false;
  const preloader = document.getElementById("preloader");

  if (preloader) {
    if (!isMobile) {
      setTimeout(() => {
        preloader.classList.add("preloaded");
      }, 800);
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    } else {
      preloader.remove();
    }
  }
};

export const customCursor = () => {
  const myCursor = document.querySelectorAll(".mouse-cursor");
  const hamburger = document.querySelector(".hamburger");
  const kura_tm_topbar = document.querySelector(".kura_tm_topbar ");
  const pointer = document.querySelector(".cursor-pointer");
  const e = document.querySelector(".cursor-inner");
  const t = document.querySelector(".cursor-outer");

  function mouseEvent(element: Element) {
    if (!e || !t) {
      return;
    }
    element.addEventListener("mouseenter", () => {
      e.classList.add("cursor-hover");
      t.classList.add("cursor-hover");
    });
    element.addEventListener("mouseleave", () => {
      e.classList.remove("cursor-hover");
      t.classList.remove("cursor-hover");
    });
  }

  if (myCursor.length) {
    console.log(myCursor.length);
    if (document.body) {
      let n: number,
        i = 0,
        o = false;

      window.onmousemove = (s) => {
        if (!o) {
          (
            t as HTMLElement
          ).style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
        }
        (
          e as HTMLElement
        ).style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
        n = s.clientY;
        i = s.clientX;
      };

      document.body.addEventListener("mouseenter", () => {
        if (!e || !t) {
          return;
        }

        const a = document.querySelectorAll("a");
        e.classList.add("cursor-inner");
        t.classList.add("cursor-outer");

        for (let i = 0; i < a.length; i++) {
          const element = a[i];
          mouseEvent(element);
        }

        if (hamburger) mouseEvent(hamburger);
        if (kura_tm_topbar) mouseEvent(kura_tm_topbar);
        if (pointer) mouseEvent(pointer);
      });

      (e as HTMLElement).style.visibility = "visible";
      (t as HTMLElement).style.visibility = "visible";
    }
  }
};

export const preloader = () => {
  preloader_();
  setTimeout(() => {
    document.querySelector("body")?.classList.add("opened");
  }, 3000);
};

export const aTagClick = () => {
  const aTag = document.querySelectorAll("[href='#']");
  aTag.forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
};

export const dataImage = () => {
  const d = document.querySelectorAll("[data-img-url");
  d.forEach((element) => {
    (
      element as HTMLElement
    ).style.backgroundImage = `url(${element.getAttribute("data-img-url")})`;
  });
};

export const imgToSVG = () => {
  document.querySelectorAll("img.svg").forEach((el) => {
    const imgID = el.getAttribute("id");
    const imgClass = el.getAttribute("class");
    const imgURL = el.getAttribute("src");

    if (!imgURL) {
      return;
    }

    fetch(imgURL)
      .then((data) => data.text())
      .then((response) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response, "text/html");
        const svg = xmlDoc.querySelector("svg");

        if (imgID) {
          svg?.setAttribute("id", imgID);
        }

        if (imgClass) {
          svg?.setAttribute("class", imgClass + " replaced-svg");
        }

        svg?.removeAttribute("xmlns:a");

        if (el.parentNode) {
          el.parentNode.replaceChild(svg!, el);
        }
      });
  });
};

export const activeSection = (value: string) => {
  const sections = document.querySelectorAll(".edrea_tm_section");
  sections.forEach((section) => {
    const id = section.getAttribute("id");
    if (id === value) {
      section.className = "edrea_tm_section active wow animated fadeInUp";
    } else {
      section.className = "edrea_tm_section hidden animated";
    }
  });
};

export const activeSkillProgress = () => {
  const progress_inner = document.querySelectorAll(".skillsInner___");
  const triggerBottom = (window.innerHeight / 5) * 5;
  progress_inner.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    const boxElement = box.getElementsByClassName("bar");
    const label = box.getElementsByClassName("label");
    const number = box.getElementsByClassName("number");
    const boxItem = boxElement[0];
    const pWidth = box.getAttribute("data-value");
    const pColor = box.getAttribute("data-color") as string;

    console.log(boxElement);
    if (boxTop < triggerBottom) {
      boxItem.classList.add("open");
      label[0].classList.add("opened");
      (number[0] as HTMLElement).style.right = `${100 - Number(pWidth)}%`;
      (
        boxItem.getElementsByClassName("bar_in")[0] as HTMLElement
      ).style.width = `${pWidth}%`;
      (
        boxItem.getElementsByClassName("bar_in")[0] as HTMLElement
      ).style.backgroundColor = pColor;
    } else {
      boxItem.classList.remove("open");
      label[0].classList.remove("opened");
      (number[0] as HTMLElement).style.right = `${120}%`;
    }
  });
};

export const scrollSection = () => {
  const sections = document.querySelectorAll(".orido_tm_section");
  const navLi = document.querySelectorAll(".anchor_nav li");
  let current = "";
  sections.forEach((section) => {
    const sectionTop = (section as HTMLElement).offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id") || "";
    }
  });

  navLi.forEach((li) => {
    if (current !== "") {
      li.classList.remove("current");
    }
    const liLink = li.getElementsByTagName("a")[0];
    if (liLink.getAttribute("href") === `#${current}`) {
      li.classList.add("current");
    }
  });

  hashtag();
};

export const stickyNav = () => {
  const offset = window.scrollY;
  const stickys = document.querySelectorAll(".orido_tm_header");
  stickys.forEach((sticky) => {
    if (sticky) {
      if (offset > 100) {
        sticky.classList.add("animate");
      } else {
        sticky.classList.remove("animate");
      }
    }
  });
};

export const scrollTop = () => {
  const bar = document.querySelector(".progressbar");
  const line = document.querySelector(".progressbar .line");
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const winScroll = window.scrollY;
  const value = (winScroll / (documentHeight - windowHeight)) * 100;
  const position = value;
  if (winScroll > 100) {
    bar?.classList.add("animate");
    (line as HTMLElement).style.height = position + "%";
  } else {
    bar?.classList.remove("animate");
  }
};

export const filter_hashtag = () => {
  const ccc = document.querySelector(
    ".orido_tm_informations .right .filter .ccc"
  );
  const current = document.querySelector(
    ".orido_tm_informations .right .filter .current"
  );
  const a = document.querySelectorAll(
    ".orido_tm_informations .right .filter a"
  );
  const filter = document.querySelector(
    ".orido_tm_informations .right .filter"
  );
  a.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      ccc && currentLinkFilter(ccc, e);
    });
  });
  filter?.addEventListener("mouseleave", () => {
    ccc && currentLinkFilter(ccc, current);
  });
  ccc && currentLinkFilter(ccc, current);
};

function currentLinkFilter(ccc: Element, e: Element | null) {
  if (!e) {
    return false;
  }
  const left = (e as HTMLElement).offsetLeft;
  const width = (e as HTMLElement).offsetWidth + 80;
  const menuleft = (
    document.querySelector(
      ".orido_tm_informations .right .filter"
    ) as HTMLElement
  )?.offsetLeft;
  (ccc as HTMLElement).style.left = menuleft ? left - menuleft - 40 + "px" : "";
  (ccc as HTMLElement).style.width = width + "px";
}

export const hashtag_ = () => hashtag();
const hashtag = () => {
  const ccc = document.querySelector(".orido_tm_header .menu .ccc");
  const current = document.querySelector(".orido_tm_header .menu .current a");
  ccc && currentLink(ccc, current);
};

function currentLink(ccc: Element, e: Element | null) {
  if (!e) {
    return false;
  }
  const left = (e as HTMLElement).offsetLeft;
  const width = (e as HTMLElement).offsetWidth;
  (ccc as HTMLElement).style.left = left + "px";
  (ccc as HTMLElement).style.width = width + "px";
}

export const Servicehashtag = () => {
  const ccc = document.querySelector(".orido_tm_service .ccc");
  const current = document.querySelector(".orido_tm_service .current");
  const a = document.querySelectorAll(".orido_tm_service .service_list ul li");
  const filter = document.querySelector(".orido_tm_service .service_list");

  a.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      ccc && currentLinkService(ccc, e);
    });
  });
  filter?.addEventListener("mouseleave", () => {
    ccc && currentLinkService(ccc, current);
  });
  ccc && currentLinkService(ccc, current);
};

function currentLinkService(ccc: Element, e: Element | null) {
  if (!e) {
    return false;
  }
  const siblings = getSiblings(e);
  siblings.forEach((element) => {
    element.classList.remove("current");
  });
  e.classList.add("current");
  const topOff = (e as HTMLElement).offsetTop;
  const height = (e as HTMLElement).offsetHeight;
  (ccc as HTMLElement).style.top = topOff + "px";
  (ccc as HTMLElement).style.height = height + "px";
}
