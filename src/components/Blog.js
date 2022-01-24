import React from 'react'
import {Link} from 'react-router-dom'

function Blog() {
    return (
        <section id="blog" className="blog-area gray-bg pt-110 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-10">
              <div className="section-title text-center mb-55">
                <h2>Blog &amp; Tips Suppke</h2>
                <div className="bar" />
                <p>There are many variations of passages of Lorem Ipsum that available, but the majority have fered
                  alteration in some form, by injected humour.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post mb-30">
                <div className="b-post-thumb">
                  <Link to="/blog-details"><img src="img/blog/blog_img01.jpg" alt="img" /></Link>
                </div>
                <div className="blog-content">
                  <span>19. august. 2019</span>
                  <h3><a href="/blog-details">Dietary Supplement Report Market Expected</a></h3>
                  <p>Orem Ipsum is simply dummy text the printing and types industry. Orem Ipsum is simpl text the printing and types
                    industry.</p>
                  <a href="/blog-details">Read More <i className="fas fa-plus" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post mb-30">
                <div className="b-post-thumb">
                  <a href="/blog-details"><img src="img/blog/blog_img02.jpg" alt="img" /></a>
                </div>
                <div className="blog-content">
                  <span>19. august. 2019</span>
                  <h3><a href="/blog-details">Supplementing Your Diet Towards Life</a></h3>
                  <p>Orem Ipsum is simply dummy text the printing and types industry. Orem Ipsum is simpl text the printing and types
                    industry.</p>
                  <Link to="/blog-details">Read More <i className="fas fa-plus" /></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post mb-30">
                <div className="b-post-thumb">
                  <Link to="/blog-details"><img src="img/blog/blog_img03.jpg" alt="img" /></Link>
                </div>
                <div className="blog-content">
                  <span>19. august. 2019</span>
                  <h3><a href="/blog-details">Homeopathic consultation Acupunc Expected</a></h3>
                  <p>Orem Ipsum is simply dummy text the printing and types industry. Orem Ipsum is simpl text the printing and types
                    industry.</p>
                  <Link to="/blog-details">Read More <i className="fas fa-plus" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Blog
