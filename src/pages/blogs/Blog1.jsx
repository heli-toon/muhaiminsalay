import Footer from "../../components/Footer";
import map from "../../assets/images/dotted-map-bg.webp";

export default function Blog() {
    return(
        <>
            <div className="breadcrumbs glassm">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Coding vs Programming</h2>
                        <ol>
                            <li><a href="/">Home</a></li>
                            <li><a href="/blog/">Blog</a></li>
                            <li>Coding vs Programming</li>
                        </ol>
                    </div>
                </div>
            </div>
            <section id="blog" className="blog">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-8">  
                            <article className="blog-details glassm">
                                <div className="post-img">
                                    <img src={map} alt="" className="img-fluid" />
                                </div>  
                                <h2 className="title">Coding vs Programming: Unraveling the Mysteries of Software Development</h2>
                                <div className="meta-top">
                                    <ul>
                                        <li className="d-flex align-items-center"><i className="bi bi-calendar"></i> <a href="blog-details.html"><time datetime="2024-06-25">Jun 25, 2024</time></a></li>
                                        <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href=""><time>Jun 1, 2022</time></a></li>
                                    </ul>
                                </div>  
                                <div className="content">
                                <p>
                                    In the world of software development, two terms are often used interchangeably: coding and programming. While they are related, they have distinct differences. 
                                    In this blog post, we'll delve into the similarities and differences between coding and programming, providing a comprehensive understanding of these fundamental concepts.
                                </p>
                                <h3>The Coding Process</h3>
                                <p>
                                    Coding refers to the act of writing code in a programming language to create a software, app, or website. It's the process of translating human instructions into a language that computers can understand. Think of coding as writing a recipe for your computer to follow. 
                                    A coder's primary focus is on implementing a plan, using programming languages like Python, Java, HTML or C++ to bring a design to life.
                                </p>
                                <blockquote>
                                    <p>
                                        Coding is like writing a recipe for your computer to follow
                                    </p>
                                </blockquote>
                                <h3>The Programming Process</h3>
                                <p>
                                    Programming is the broader process of designing, writing, testing, and maintaining software, apps, or websites. It encompasses not only coding but also problem-solving, algorithm development, and software engineering. 
                                    Programming is like creating a blueprint for a house, including the design, materials, and construction process. A programmer's role is to create the plan itself, considering the overall architecture, functionality, and performance of the software.
                                </p>
                                <h3>Et quae iure vel ut odit alias.</h3>
                                <p>
                                    Officiis animi maxime nulla quo et harum eum quis a. Sit hic in qui quos fugit ut rerum atque. Optio provident dolores atque voluptatem rem excepturi molestiae qui. Voluptatem laborum omnis ullam quibusdam perspiciatis nulla nostrum. Voluptatum est libero eum nesciunt aliquid qui.
                                    Quia et suscipit non sequi. Maxime sed odit. Beatae nesciunt nesciunt accusamus quia aut ratione aspernatur dolor. Sint harum eveniet dicta exercitationem minima. Exercitationem omnis asperiores natus aperiam dolor consequatur id ex sed. Quibusdam rerum dolores sint consequatur quidem ea.
                                    Beatae minima sunt libero soluta sapiente in rem assumenda. Et qui odit voluptatem. Cum quibusdam voluptatem voluptatem accusamus mollitia aut atque aut.
                                </p>
                                <img src={map} className="img-fluid" alt="" />
                                <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
                                <p>
                                    Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro amet nostrum. In assumenda quia quae a id praesentium. Quos deleniti libero sed occaecati aut porro autem. Consectetur sed excepturi sint non placeat quia repellat incidunt labore. Autem facilis hic dolorum dolores vel.
                                    Consectetur quasi id et optio praesentium aut asperiores eaque aut. Explicabo omnis quibusdam esse. Ex libero illum iusto totam et ut aut blanditiis. Veritatis numquam ut illum ut a quam vitae.
                                </p>
                                <p>
                                    Alias quia non aliquid. Eos et ea velit. Voluptatem maxime enim omnis ipsa voluptas incidunt. Nulla sit eaque mollitia nisi asperiores est veniam.
                                </p>
                                </div>
                
                                <div className="meta-bottom">
                                <i className="bi bi-folder"></i>
                                <ul className="cats">
                                    <li><a href="#">Business</a></li>
                                </ul>
                                <i className="bi bi-tags"></i>
                                <ul className="tags">
                                    <li><a href="#">Creative</a></li>
                                    <li><a href="#">Tips</a></li>
                                    <li><a href="#">Marketing</a></li>
                                </ul>
                                </div>
                            </article>  
                            <div className="post-author glassm d-flex align-items-center">
                                <img src={map} className="rounded-circle flex-shrink-0" alt="" />
                                <div>
                                    <h4>Salay Abdul Muhaimin Kanton</h4>
                                    <div className="social-links">
                                        <a href="https://twitters.com/#"><i className="bi bi-twitter-x"></i></a>
                                        <a href="https://facebook.com/#"><i className="bi bi-facebook"></i></a>
                                        <a href="https://instagram.com/#"><i className="bi bi-instagram"></i></a>
                                    </div>
                                    <p>
                                        Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed possimus accusantium. Quas repellat voluptatem officia numquam sint aspernatur voluptas. Esse et accusantium ut unde voluptas.
                                    </p>
                                </div>
                            </div>  
                        </div>
                        <div className="col-lg-4">
                        <div className="sidebar">
                            <div className="sidebar-item search-form">
                            <h3 className="sidebar-title">Search</h3>
                            <form action="" className="mt-3">
                                <input type="search" title="Search" placeholder="Search" />
                                <button type="submit" title="search" className="btn"><i className="bi bi-search"></i></button>
                            </form>
                            </div>
                            <div className="sidebar-item categories">
                            <h3 className="sidebar-title">Categories</h3>
                            <ul className="mt-3">
                                <li><a href="#">General <span>(25)</span></a></li>
                                <li><a href="#">Lifestyle <span>(12)</span></a></li>
                                <li><a href="#">Educaion <span>(14)</span></a></li>
                            </ul>
                            </div>  
                            <div className="sidebar-item tags">
                                <h3 className="sidebar-title">Tags</h3>
                                <ul className="mt-3">
                                    <li><a href="#">App</a></li>
                                    <li><a href="#">IT</a></li>
                                    <li><a href="#">Business</a></li>
                                    <li><a href="#">Mac</a></li>
                                </ul>
                            </div>
                        </div>  
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}