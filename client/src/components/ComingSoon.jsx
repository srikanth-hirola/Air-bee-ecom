import React from 'react'

const ComingSoon = () => {
  return (
    <>
        <div class="mobile-container">
  <header>
    <section class="hero-banner">
      <div class="logo-wrapper">
        <img src="https://assets.codepen.io/6060109/2560px-Adidas_Logo+1.png" alt="Adidas logo."/>
      </div>
      <div class="hero-image"></div>
    </section>
  </header>
  <main>
    <article class="text-info">
      <h2>We're</h2>
      <h2>Coming<br/>Soon</h2>
      <p>Hello friends! We are currently building our new sports and comfort clothing store. Add your email address below to stay up-to-date with announcements and our launch proposals.</p>
      <section class = "email-signup">
        <form>
          <input class="email-input" type="email" required placeholder="Email Address" name="email-address"/>
          <input class="email-submit" value="Go" type="submit" text="Go" for="email-address"></input>
        </form>
      </section>
    </article>
  </main>
</div>
<div class="hero-image-desktop">
  <img src="https://assets.codepen.io/6060109/athlete-big.png" alt="Femail athlete squinting towards the camera."/>
</div>
    </>
  )
}

export default ComingSoon