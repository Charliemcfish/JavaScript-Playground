//This site is a JS playground so I can mess around with DOM manipulation


// Add a new box

document.getElementById('addBoxButton').addEventListener('click', function() {
const boxContainer = document.getElementById("boxContainer");
const newBox = document.createElement("div");
newBox.className = "box";
newBox.innerText = "New Box";
boxContainer.appendChild(newBox);
})

// Toggle visibility of boxes

document.getElementById("toggleBoxesButton").addEventListener("click", function() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.classList.toggle("hidden");
    })
})


// Remove all boxes

document.getElementById("removeAllButton").addEventListener("click", function() {
    const boxContainer = document.getElementById("boxContainer");
    boxContainer.innerHTML = "";
})

// Change box colours

function getRandomColour() {
    const letters = '0123456789ABCDEF';
    let colour = "#";
    for (let i = 0; i < 6; i++) {
        colour += letters[Math.floor(Math.random() * 16)];
    } 
    return colour;
}

document.getElementById("changeColourButton").addEventListener("click", function() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.style.backgroundColor = getRandomColour();
    })
})

// Count how many boxes there are

function updateBoxCount() {
    const boxCount = document.getElementById("boxCount");
    const boxes = document.querySelectorAll(".box").length;
    boxCount.innerText = `Number Of Boxes: ${boxes}`;
}

document.getElementById("addBoxButton").addEventListener("click", function() {
    updateBoxCount();
})

document.getElementById("removeAllButton").addEventListener("click", function() {
    updateBoxCount();
})


// Change the text of a box

document.getElementById("changeTextButton").addEventListener("click", function() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.innerText = "Updated box text!";
    })
})


// Clone a box

document.getElementById("cloneBoxButton").addEventListener("click", function() {
    const firstBox = document.querySelector(".box");
    if (firstBox) {
        const clonedBox = firstBox.cloneNode(true);
        document.getElementById("boxContainer").appendChild(clonedBox);
    }
})


// Animate Boxes

document.getElementById("animateButton").addEventListener("click", function() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.style.transition = "transform 0.5s";
        box.style.transform = "scale(1.2)";
        setTimeout(() => {
            box.style.transform = "scale(1)";
        }, 500);
    })
})

// Sort boxes in alphabetical order

document.getElementById("sortButton").addEventListener("click", function() {
    const boxContainer = document.getElementById("boxContainer");
    const boxes = Array.from(boxContainer.children);
    boxes.sort((a, b) => a.innerText.localeCompare(b.innerText));
    boxes.forEach(box => boxContainer.appendChild(box));
})


// Change font size

document.getElementById("changeFontSizeButton").addEventListener("click", function() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.style.fontSize = "20px";
    })
})


// Customise the border style of the boxes

document.getElementById("changeBorderButton").addEventListener("click", function() {
    const boxes = document.querySelectorAll(".box");
    const borderStyles = ["solid", "dashed", "dotted", "double", "groove"];
    boxes.forEach(box => {
        const randomStyle = borderStyles[Math.floor(Math.random() * borderStyles.length)];
        box.style.border = `3px ${randomStyle} ${getRandomColour()}`;
    })
})

// Rotate boxes

document.getElementById("rotateBoxesButton").addEventListener("click", function() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        const randomRotation = Math.floor(Math.random() * 360);
        box.style.transform = `rotate(${randomRotation}deg)`;
    })
})


// Change box shape

document.getElementById("shapeShiftButton").addEventListener("click", function() {
    const boxes = document.querySelectorAll(".box")
    boxes.forEach(box => {
        const isCircle = box.style.borderRadius === "50%";
        box.style.borderRadius = isCircle ? "0%" : "50%";
    })
})


// Randomly move boxes around

document.getElementById("randomMoveButton").addEventListener("click", function() {
    const boxContainer = document.getElementById("boxContainer");
    const boxes = document.querySelectorAll(".box");
    const containerWidth = boxContainer.clientWidth;
    const containerHeight = boxContainer.clientHeight;

    boxes.forEach(box => {
        const randomX = Math.floor(Math.random() * (containerWidth - 100));
        const randomY = Math.floor(Math.random() * (containerHeight - 100));
        box.style.position = "absolute";
        box.style.left = `${randomX}px`;
        box.style.top = `${randomY}px`;
    })
})

// Expand / Collapse individual boxes

document.getElementById("boxContainer").addEventListener("click", function(e) {
    if (e.target.classList.contains("box")) {
        const box = e.target;
        const isExpanded = box.style.width === "300px";
        box.style.width = isExpanded ? "200px" : "300px";
        box.style.height = isExpanded ? "100px" : "150px"; 
    }
})


// Highlight box on hover

document.getElementById("boxContainer").addEventListener("mouseover", function(e) {
    if (e.target.classList.contains("box")) {
        e.target.style.boxShadow = '0 0 20px rgba(0, 255, 0, 0.7)';
    }
});

document.getElementById("boxContainer").addEventListener("mouseout", function(e) {
    if (e.target.classList.contains("box")) {
        e.target.style.boxShadow = "none";
    }
})


// Countdown timer inside of boxes

document.getElementById("startCountdownButton").addEventListener("click", function() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        let time = 10;
        box.innerText = time;

        const intervalId = setInterval(() => {
            time--;
            box.innerText = time;
            if (time <= 0) {
                clearInterval(intervalId);
                box.innerText = "Times up!";
            }
        }, 1000);
    })
})


// Remove a box when you double click

document.getElementById("boxContainer").addEventListener("dblclick", function(e) {
    if (e.target.classList.contains("box")) {
        e.target.remove();
        updateBoxCount();
    }
})

// Toggle Dark Mode

document.getElementById("toggleDarkModeButton").addEventListener("click", function() {
    const boxes = document.querySelectorAll(".box");
   
    boxes.forEach(box => {
        const isDarkMode = box.style.backgroundColor === "black";
        box.style.backgroundColor = isDarkMode ? "white" : "black";
        box.style.color = isDarkMode ? "black" : "white";
        
    })
})

// Add cute cat images inside boxes

const images = [
"https://img.freepik.com/free-photo/view-adorable-persian-domestic-cat_23-2151773881.jpg",
"https://images.ctfassets.net/ub3bwfd53mwy/5zi8myLobtihb1cWl3tj8L/45a40e66765f26beddf7eeee29f74723/6_Image.jpg?w=750",
"https://i.chzbgr.com/full/9817556992/hAA1BE0BC/bag-12",
"https://www.shutterstock.com/image-photo/beautiful-wonderful-cute-kitten-wallpaper-600nw-2435308283.jpg",
"https://hips.hearstapps.com/hmg-prod/images/cute-photos-of-cats-screaming-1593184782.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=980:*"
];

document.getElementById('addImageButton').addEventListener('click', function() {

    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        box.innerHTML = `<img src="${randomImage}" alt="Box Image" style="width: 100%">`;
    })

 })

 // Earthquake effect

 document.getElementById('shakeBoxesButton').addEventListener('click', function() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.transition = 'transform 0.1s';
        let degree = 5;
        const shakeInterval = setInterval(() => {
            box.style.transform = `rotate(${degree}deg)`;
            degree = degree === 5 ? -5 : 5;
        }, 100);
        setTimeout(() => {
            clearInterval(shakeInterval);
            box.style.transform = 'rotate(0deg)';
        }, 1000);
    });
});


// Make the boxes fly off the screen

document.getElementById('launchBoxesButton').addEventListener('click', function() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.transition = 'transform 2s';
        box.style.transform = 'translateY(-2000px) rotate(360deg)';
    });
});

// Make boxes dance

document.getElementById('danceBoxesButton').addEventListener('click', function() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.transition = 'all 1s';
        box.style.transform = 'rotate(360deg) scale(1.5)';
        setTimeout(() => {
            box.style.transform = 'rotate(-360deg) scale(1)';
        }, 1000);
    });
});


// Add jokes into boxes

const jokes = [
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "I told my computer I needed a break, and now it won’t stop sending me KitKats.",
    "Why don’t eggs tell jokes? They’d crack each other up.",
    "I’m reading a book about anti-gravity. It’s impossible to put down!"
];

document.getElementById('jokeButton').addEventListener('click', function() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        box.innerText = randomJoke;
    });
});

// Random box sizes

document.getElementById('randomSizeButton').addEventListener('click', function() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        const randomSize = Math.floor(Math.random() * 150) + 50;
        box.style.width = `${randomSize}px`;
        box.style.height = `${randomSize}px`;
    });
});

// Rainbow colour

document.getElementById('rainbowButton').addEventListener('click', function() {
    const boxes = document.querySelectorAll('.box');
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let colorIndex = 0;

    const interval = setInterval(() => {
        boxes.forEach(box => {
            box.style.backgroundColor = colors[colorIndex];
        });
        colorIndex = (colorIndex + 1) % colors.length;
    }, 500);

    setTimeout(() => clearInterval(interval), 5000); // Stops after 5 seconds
});

// Make boxes bounce

document.getElementById('bounceBoxesButton').addEventListener('click', function() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.transition = 'transform 0.3s ease-in-out';
        let direction = 1;
        const bounceInterval = setInterval(() => {
            box.style.transform = `translateY(${direction * 20}px)`;
            direction = direction * -1;
        }, 300);
        setTimeout(() => clearInterval(bounceInterval), 3000);
    });
});


// Replace text with Emojis

const emojis = ['😂', '🐱', '🌈', '🚀', '🍕', '😎', '🎉'];

document.getElementById('emojiButton').addEventListener('click', function() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        box.innerText = randomEmoji;
    });
});


// Make boxes follow the mouse

document.getElementById('followMouseButton').addEventListener('click', function() {
    document.addEventListener('mousemove', function(e) {
        const boxes = document.querySelectorAll('.box');
        boxes.forEach((box, index) => {
            const delay = index * 50;
            setTimeout(() => {
                box.style.position = 'absolute';
                box.style.left = `${e.pageX}px`;
                box.style.top = `${e.pageY}px`;
            }, delay);
        });
    });
});

// Explosion effect

document.getElementById('explodeButton').addEventListener('click', function() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.transition = 'transform 0.5s, opacity 0.5s';
        box.style.transform = 'scale(2) rotate(720deg)';
        box.style.opacity = '0';
        setTimeout(() => {
            box.remove();
        }, 500);
    });
});
