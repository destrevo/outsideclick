    const element = document.querySelector(".burger-options");

    document.addEventListener("mousedown", (e) => {
        // console.log(concernedElement, e.target);
        if (element.contains(e.target)) {
            // console.log("clicked inside");
        } else {
            setOpen(false)
            // console.log("clicked outside");
        }
    }
