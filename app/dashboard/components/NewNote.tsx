"use client";

import { useState } from "react";
import styles from "../dashboard.module.css";

export default function NewNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    console.log({ title, content })

    // reset state
    setTitle("")
    setContent("")
  };

  return (
    <div className={styles.newNote}>
      <h2 className={styles.newNoteTitle}>New Note</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="content">
            Content
          </label>
          <textarea
            id="content"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={styles.textarea}
            rows={6}
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Add Note
        </button>
      </form>
    </div>
  );
}