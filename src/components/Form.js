
export default function Form(props) {
    return (
      <form name="form" className="form" aria-label="Form subscribe notifications">
        <div className="form__group">
          <input
            type="email"
            name="email"
            className="input input__email"
            placeholder="Your email address..."
            aria-label="Your email address..."
          />
          <button
            type="submit"
            className="button button__submit"
            value="Notify Me"
            aria-pressed="true"
            aria-label="Notify Me"
          >
            Notify Me
          </button>
        </div>
      </form>
    );
}