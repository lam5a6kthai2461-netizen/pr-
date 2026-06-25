// typed animation
new Typed('#typed', {
  strings: [
    "AI Creative Designer",
    "Digital Storyteller",
    "Visual Researcher"
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});

// filter system
function filter(type) {
    let cards = document.querySelectorAll('.card');
    cards.forEach(c => {
        if (type === 'all') {
            c.style.display = 'block';
        } else {
            c.style.display = c.classList.contains(type) ? 'block' : 'none';
        }
    });
}

// modal data
const projects = {
  1: "AI Content Production: Interview + AI script + video workflow",
  2: "Visual AI Design: Midjourney branding + visual system",
  3: "Data Storytelling: Flourish + Excel + narrative visualization",
  4: "Spatial Media: Drone + 3D modeling + VR space"
};

function openModal(id) {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal-text').innerText = projects[id];
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// simple AI chat (rule-based)
function ask() {
    let input = document.getElementById("input").value.toLowerCase();
    let answer = "";

    if (input.includes("ai")) {
        answer = "I focus on AI-assisted creative production and visual storytelling.";
    } else if (input.includes("project")) {
        answer = "I have projects in AI, Data Visualization, Video, and 3D Media.";
    } else {
        answer = "Please ask about AI, projects, or design.";
    }

    document.getElementById("answer").innerText = answer;
}