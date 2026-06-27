const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenu.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.className = 'fas fa-xmark';
    } else {
        icon.className = 'fas fa-bars';
    }
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.querySelector('i').className = 'fas fa-bars';
    });
});

const sections = document.querySelectorAll('section');

const scrollEffects = () => {
    let currentSectionId = '';
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionRect = section.getBoundingClientRect().top;
        
        if (window.scrollY >= (sectionTop - 150)) {
            currentSectionId = section.getAttribute('id');
        }

        if (sectionRect < triggerBottom) {
            section.classList.add('appear');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active-link');
        if (item.getAttribute('href') === `#${currentSectionId}`) {
            item.classList.add('active-link');
        }
    });
};

window.addEventListener('scroll', scrollEffects);
window.addEventListener('DOMContentLoaded', scrollEffects);

const textElement = document.getElementById('typing-text');
const nameText = "Wandi Subagja";
let index = 0;

function typeWriter() {
    if (index === 0) { textElement.innerHTML = ""; }
    if (index < nameText.length) {
        textElement.innerHTML += nameText.charAt(index);
        index++;
        setTimeout(typeWriter, 150);
    }
}
window.addEventListener('load', typeWriter);

const skillData = {
    "indiv-team": {
        title: "Kerja Individu & Tim",
        icon: "fas fa-users-cog",
        color: "#10b981",
        desc: "Memiliki kemampuan beradaptasi yang baik untuk menyelesaikan tugas secara mandiri dengan tanggung jawab penuh, sekaligus mampu berkolaborasi aktif dalam kelompok demi mencapai tujuan bersama."
    },
    creative: {
        title: "Berpikir Kreatif",
        icon: "fas fa-lightbulb",
        color: "#ff4b4b",
        desc: "Mampu berpikir *out-of-the-box* untuk menemukan solusi inovatif dalam memecahkan masalah, serta terbuka terhadap ide-ide baru yang segar dan efektif."
    },
    integrity: {
        title: "Integritas",
        icon: "fas fa-shield-alt",
        color: "#0284c7",
        desc: "Menjunjung tinggi kejujuran, etika, dan konsistensi dalam bertindak. Berkomitmen penuh pada nilai-nilai moral yang baik dalam lingkungan akademik maupun profesional."
    },
    collaboration: {
        title: "Komunikasi & Kolaborasi",
        icon: "fas fa-comments",
        color: "#a78bfa",
        desc: "Cakap dalam menyampaikan gagasan secara jelas, mendengarkan dengan baik, serta membangun hubungan kerja yang harmonis dan produktif dengan rekan kerja."
    },
    office: {
        title: "Microsoft Office",
        icon: "fas fa-file-lines",
        color: "#3b82f6",
        desc: "Telah terbiasa mengoperasikan Microsoft Office seperti Word, Excel, dan PowerPoint untuk kebutuhan penyusunan laporan, analisis data sederhana, serta pembuatan presentasi yang menarik."
    }
};

const modal = document.getElementById('skill-modal');
const closeButton = document.querySelector('.close-button');
const modalIcon = document.getElementById('modal-icon');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');

document.querySelectorAll('.skill-box').forEach(box => {
    box.addEventListener('click', () => {
        const skillKey = box.getAttribute('data-skill');
        const data = skillData[skillKey];

        if (data) {
            modalIcon.className = data.icon;
            modalIcon.style.color = data.color;
            modalTitle.innerText = data.title;
            modalDesc.innerText = data.desc;
            modal.style.display = 'flex';
        }
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});