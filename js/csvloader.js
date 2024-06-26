    // Function to create HTML content from CSV data
    function createHTMLFromCSV(csvData) {
        // Parse CSV data
        const rows = csvData.split('\n').map(row => row.split('~'));
    
        // Skip the first row
        const dataRows = rows.slice(1, rows.length - 1); // Exclude the first row and the last two empty rows
    
        // Iterate through rows and create HTML content
        dataRows.forEach((row, index) => {
            const figure = document.createElement('figure');
            figure.classList.add('swiper-slide');
    
            const cardPopout = document.createElement('div');
            cardPopout.classList.add('cardPopout');
            cardPopout.setAttribute('data-swiper-parallax', '30');
            cardPopout.setAttribute('data-swiper-parallax-scale', '0.9');
            cardPopout.setAttribute('data-swiper-parallax-opacity', '0.8');
            cardPopout.setAttribute('data-swiper-parallax-duration', '1000');
    
            const img = document.createElement('img');
            img.src = row[1]; // Second box of the iterated row
            img.alt = row[2]; // Third box of the iterated row
            img.width = 400;
            img.height = 400;
            img.loading = 'lazy'; // Add lazy loading
            img.setAttribute('data-swiper-parallax', '80');
            img.setAttribute('data-swiper-parallax-duration', '2000');
    
            const title = document.createElement('h2');
            title.classList.add('title');
            title.textContent = row[2]; // Fourth box of the iterated row
            title.setAttribute('data-swiper-parallax', '80');
            title.setAttribute('data-swiper-parallax-duration', '1000');
    
            const subtitle = document.createElement('h4');
            subtitle.classList.add('subtitle');
            subtitle.textContent = row[3]; // Fifth box of the iterated row
            subtitle.setAttribute('data-swiper-parallax', '80');
            subtitle.setAttribute('data-swiper-parallax-duration', '1500');
    
            const figcaption = document.createElement('figcaption');
            figcaption.setAttribute('data-swiper-parallax', '80');
            figcaption.setAttribute('data-swiper-parallax-duration', '1250');
            figcaption.innerHTML = `<p>${row[4]}</p>`; // Sixth box of the iterated row
    
            const continueReadingLink = document.createElement('a');
            continueReadingLink.href = `./assets/artbig/art (${index + 1}).png`; // Dynamically set the href attribute
            continueReadingLink.title = 'Expand';
            continueReadingLink.setAttribute('data-swiper-parallax', '80');
            continueReadingLink.setAttribute('data-swiper-parallax-opacity', '0.2');
            continueReadingLink.setAttribute('data-swiper-parallax-duration', '1750');
            continueReadingLink.textContent = 'Expand';
            
            // Add click event listener to the "Expand" link
            continueReadingLink.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default behavior of the link
            
                // Get the href attribute of the clicked link
                const imageUrl = this.href;
            
                // Set the background image of the .imageoverlay element
                const imageOverlay = document.querySelector('.imageoverlay');
                const imageOverlay2 = document.querySelector('.imageoverlay2');
                imageOverlay.style.backgroundImage = `url('${imageUrl}')`;
            
                // Show the image overlay
                // imageOverlay.style.display = 'block';
                // imageOverlay2.style.display = 'block';

                imageOverlay.style.display = 'block';
                imageOverlay2.style.display = 'block';
            
                // Append text from the fifth column of the iteration row
                const fifthColumnText = row[4]; // Assuming the text is stored in the fifth column of the row
                const imageOverlayText = document.querySelector('.imageoverlaytext');
                imageOverlayText.textContent = fifthColumnText;
               
            })
                


                

            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            svg.setAttribute('width', '16');
            svg.setAttribute('height', '16');
            svg.setAttribute('fill', 'currentColor');
            svg.setAttribute('class', 'bi bi-arrow-right-short');
            svg.setAttribute('viewBox', '0 0 16 16');
            svg.innerHTML = `<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />`;

            continueReadingLink.appendChild(svg);

            

            // Append elements to their respective parents
            figcaption.appendChild(continueReadingLink);
            cardPopout.appendChild(img);
            cardPopout.appendChild(title);
            cardPopout.appendChild(subtitle);
            cardPopout.appendChild(figcaption);
            figure.appendChild(cardPopout);


   

            for (let i = 1; i <= 4; i++) {
                
                const c = document.createElement('corners');
                c.setAttribute('data-swiper-parallax', '150');
                c.setAttribute('data-swiper-parallax-scale', '1.1');
                c.setAttribute('data-swiper-parallax-opacity', '0.3');
                c.setAttribute('data-swiper-parallax-duration', '1000');
                c.classList.add(`c${i}`);
                
                figure.appendChild(c);
            }
            
            
            
            



            // Append figure to the swiper container
            document.querySelector('.swiper-wrapper').appendChild(figure);
        });

    
    }

    // Fetching CSV file
    fetch('./assets/csv/artportfolio.csv')
        .then(response => response.text())
        .then(data => {
            // Data is retrieved, now create HTML content
            createHTMLFromCSV(data);
        })
        .catch(error => {
            // Handle error if fetch fails
            console.error('Error fetching CSV file:', error);
        });


        


        function createOverlayWithImage(imageSrc) {
    // Create overlay container
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    // Set background image
    overlay.style.backgroundImage = `url(${imageSrc})`;
    
    // Set height and width
    overlay.style.height = '50vh';
    overlay.style.width = 'auto';

    // Append overlay to the body
    document.body.appendChild(overlay);

    // You can add additional styling or functionality here as needed
}



document.addEventListener("DOMContentLoaded", function() {
    var overlay = document.querySelector('.imageoverlay');
    var overlay2 = document.querySelector('.imageoverlay2');

    overlay2.addEventListener('click', function() {
      overlay.style.display = 'none';
      overlay2.style.display = 'none';
    });
  });


