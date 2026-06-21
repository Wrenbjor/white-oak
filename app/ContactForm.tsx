"use client";

export default function ContactForm() {
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <div className="form__grid">
        <label className="field">
          <input type="text" placeholder="First Name:" />
        </label>
        <label className="field">
          <input type="text" placeholder="Last Name:" />
        </label>
        <label className="field">
          <input type="email" placeholder="Email:" />
        </label>
        <label className="field">
          <input type="tel" placeholder="Phone:" />
        </label>
        <label className="field field--select">
          <select defaultValue="">
            <option value="" disabled>
              Are You Buying Or Selling?:
            </option>
            <option>Buying</option>
            <option>Selling</option>
          </select>
        </label>
        <label className="field field--select">
          <select defaultValue="">
            <option value="" disabled>
              When Is The Best Time To Call?:
            </option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </label>
        <label className="field field--full">
          <textarea placeholder="How Can We Help You?:" />
        </label>
      </div>
      <button type="submit" className="form__submit">
        Submit
      </button>
    </form>
  );
}
