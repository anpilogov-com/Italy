let sliderIndex=1;function nextSlides(e){showSlides(sliderIndex+=e)}function currentSlide(e){showSlides(sliderIndex=e)}function showSlides(e){let l=document.getElementsByClassName("slide"),s=document.getElementsByClassName("dot");e>l.length&&(sliderIndex=1),e<1&&(sliderIndex=sliderIndex.length);for(let e=0;e<l.length;e++)l[e].style.display="none";for(let e=0;e<s.length;e++)s[e].className=s[e].className.replace("active","");l[sliderIndex-1].style.display="grid",s[sliderIndex-1].className+=" active"}showSlides(sliderIndex);let slider2Index=1;function next2Slides(e){showSlides2(slider2Index+=e)}function current2Slide(e){showSlides2(slider2Index=e)}function showSlides2(e){let l=document.getElementsByClassName("slide--tow"),s=document.getElementsByClassName("dot--tow");e>l.length&&(slider2Index=1),e<1&&(slider2Index=slider2Index.length);for(let e=0;e<l.length;e++)l[e].style.display="none";for(let e=0;e<s.length;e++)s[e].className=s[e].className.replace("active","");l[slider2Index-1].style.display="grid",s[slider2Index-1].className+=" active"}showSlides2(slider2Index);