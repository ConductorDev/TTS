export function GoogleReviews() {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Guests Say</h2>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12950.022166143713!2d-82.5539567!3d35.5787645!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8859f4a7c5b55555%3A0x7ab810d45080d34b!2sThe%20Train%20Station!5e0!3m2!1sen!2sus!4v1703728131317!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full max-w-4xl rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
