import { useState } from 'react'
import introLogo from './assets/Ellipse 1.svg'
import work_sec_img1 from './assets/Rectangle 30.png'
import work_sec_img2 from './assets/Rectangle 32.png'
import work_sec_img3 from './assets/Rectangle 34.png'
import facebook_link from './assets/fb.svg'
import insta_link from './assets/insta.svg'
import twitter_link from './assets/Group.svg'
import linked_link from './assets/Linkedin.svg'

import './App.css'

function App() {
    return (
    <>
      <header class="Header-link">
  <div class="container">
  <div class="link">
    <a href="#" target="_blank" class="links">Works</a>
    <a href="blog.html" target="_blank" class="links">Blog</a>
    <a href="contact.html" target="_blank" class="links">Contact</a>
  </div>

  <button class="gam_menu"></button>

</div>
</header>

<main class="main">
  <section class="section-1">
<div class="start">
<div class="container">
<div class="left-textes">
  <p class="p-one">Hi, I am John,
    Creative Technologist</p>

  <p class="p-two">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>  

    <div class="download-link">
      <a href="#" target="_blank" class="to-download">Download Resume</a>
    </div>
</div>
 
<div class="photo-men">
  <img src={introLogo} alt="men"/>
</div>
</div>
</div>
</section>

<section class="section-2">
<div class="intro">
  <div class="container">

    <p class="intro-text-1">Recent posts</p>
    <a href="#" target="_blank" class="intro-link">view all</a>
    
    <div class="box-1">
      <p class="intro-box-1">Making a design system from scratch</p>

    <p class="date-box">12 Feb 2020 <span class="line">|</span>Design, Pattern</p>

    <p class="information-box">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat 
      duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>

    <div class="box-2">
      <p class="intro-box-1">Creating pixel perfect icons in Figma</p>

    <p class="date-box">12 Feb 2020 <span class="line">|</span>Figma, Icon Design</p>

    <p class="information-box">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat 
      duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>

  </div>
</div>
</section>

<section class="section-3">
    <div class="container">
   
      <p class="list3-text">Featured works</p>
      <div class="list3-box1">
      <div class="list3-image1">
        <img src={work_sec_img1} alt="texnologic"/>
        
      </div>

      <div class="list3-info">

      <p class="image-text">Designing Dashboards</p>
      
      <p class="year-1">2020</p>

      <p class="dashboard">Dashboard</p>

      <p class="list3-information">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </div>
      </div>
      </div>
    

      
      <div class="list3-box2 container">
      <div class="list3-image2">
        <img src={work_sec_img2} alt="texnologic"/>
        
      </div>

      <div class="list3-info">

      <p class="image-text">Vibrant Portraits of 2020</p>
      
      <p class="year-1">2018</p>

      <p class="dashboard">Illustration</p>

      <p class="list3-information">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </div>
      </div>
    
      
      <div class="list3-box3 container">
      <div class="list3-image3">
        <img src={work_sec_img3} alt="texnologic"/>
        
      </div>

      <div class="list3-info">

      <p class="image-text">36 Days of Malayalam type</p>
      
      <p class="year-1">2018</p>

      <p class="dashboard">Typography</p>

      <p class="list3-information">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </div>
      </div>
      
    
      </section>
  
    </main>

    <hr class="footer_hr" />

<futer class="futer">

    <div class="futer-links"> 
      <div class="link-facebook"><a href="https://www.facebook.com/" target="_blank"><img src={facebook_link} alt="facebook"/></a></div>
      <div class="link-instagram"><a href="https://www.instagram.com/" target="_blank"><img src={insta_link} alt="instagram"/></a></div>
      <div class="link-twitter"><a href="https://twitter.com/?lang=ru" target="_blank"><img src={twitter_link} alt="twitter"/></a></div>
      <div class="link-linkedin"><a href="https://ru.linkedin.com/" target="_blank"><img src={linked_link} alt="linkedin"/></a></div>
      </div>

      

    <div>
    <p class="futer-end">Copyright ©2020 All rights reserved </p>
    </div>

  </futer>
    </>
  )
}

export default App
