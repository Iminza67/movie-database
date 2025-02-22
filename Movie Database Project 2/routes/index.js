const express = require('express');
const router = express.Router();

// Route for homepage that displays team member info
router.get('/', (req, res) => {
    const group = [
        { name: 'Antoine Atanassov', id: '24/1/0855/004', picture: '/images/img1.png' },
        { name: 'Olivia Iminza Hamisi', id: '24/1/0855/052', picture: '/images/img2.png' },
        { name: 'Julia Heinrich', id: '24/1/0855/014', picture: '/images/img3.png' },
        { name: 'Magdalena Ivanova', id: '24/1/0855/017', picture: '/images/img4.png' },
    ];
    res.render('index', { group }); // Render 'index' view with group info
});

module.exports = router;

