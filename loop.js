(function() {
    // ==========================================
    // MULTI-VIDEO "SWEAT MODE" MAP
    // ==========================================
    const VIDEO_CONFIGS = {
        // The Arabic Daff version you are currently using
        '2gaWDvKWvac': [
            { start: 6,   end: 65  },
            { start: 77,  end: 115 },
            { start: 120, end: 179 },
            { start: 190, end: 270 }
        ],
        // You can add a second video configuration seamlessly here later!
        'VIDEO_ID_2_HERE': [
            { start: 10,  end: 45  },
            { start: 60,  end: 120 }
        ]
    };

    // Extract the active Video ID straight from the current browser URL
    const urlParams = new URLSearchParams(window.location.search);
    const currentVideoId = urlParams.get('v');

    if (!currentVideoId || !VIDEO_CONFIGS[currentVideoId]) {
        console.log("Timeline Manager: No custom cuts configured for this Video ID.");
        return; 
    }

    const segments = VIDEO_CONFIGS[currentVideoId];
    const video = document.querySelector('video');

    if (!video) {
        alert('Engine loaded, but no active video element found!');
        return;
    }

    console.log(`🚀 Sweat Mode Engine Engaged for Video: ${currentVideoId}`);

    // Core Jump-Cut Engine Loop (runs smoothly every 100ms)
    setInterval(function() {
        let cur = video.currentTime;
        let inside = false;

        for (let i = 0; i < segments.length; i++) {
            if (cur >= segments[i].start && cur < segments[i].end) {
                inside = true;
                break;
            }
        }

        if (!inside) {
            let next = -1;
            for (let i = 0; i < segments.length; i++) {
                if (segments[i].start > cur) {
                    next = i;
                    break;
                }
            }
            if (next !== -1) {
                video.currentTime = segments[next].start;
            } else {
                video.currentTime = segments[0].start; // Loop completely back to Segment 1
            }
        }
    }, 100);
})();
