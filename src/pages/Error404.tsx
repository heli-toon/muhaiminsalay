function ErrorPage() {
  return (
    <>
        <section className="errorpage">
            <div className="container-fluid" data-aos="zoom-out">
                <div className="container text-center py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h1>404</h1>
                            <h4 className="mb-3">
                                <i className="bi bi-exclamation-triangle"></i> 
                                {" "}Page Not Found {" "}
                                <i className="bi bi-exclamation-triangle"></i>
                            </h4>
                            <p className="mb-4">We&apos;re sorry, the page you have looked for does not exist on our website! Maybe, go to our home page</p>
                            <a className="btned py-3 px-4" href="/">Go Back To Home</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ErrorPage
