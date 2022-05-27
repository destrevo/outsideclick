    const element = document.querySelector(".burger-options");

    document.addEventListener("mousedown", (e) => {
        // console.log(element, e.target);
        if (element.contains(e.target)) {
            // console.log("clicked inside");
        } else {
            setOpen(false)
            // console.log("clicked outside");
        }
    }
/////////////////////// a little fancy
    const element_fancy = document.querySelector("whatever");

    document.addEventListener("mousedown", (e) => {
        if (!element_fancy).contains(e.target)) setOpen(false)
    });
