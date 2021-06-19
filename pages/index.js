import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Eulogy.io
        </h1>

        <p className={styles.description}>
          Get started by telling us a little about your loved one.
        </p>

        <Box width="500px" display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">

          <Box m={2}><TextField
            id="outlined-textarea"
            placeholder="What is your loved ones name?"
          /></Box>
          <br/>

          <Box m={2}><TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            placeholder="Write one or two sentences describing the person..."
          /></Box>
          <br/>

          <Button size="large" variant="contained" color="primary">Submit</Button>

        </Box>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://eulogy.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          Eulogy.io
        </a>
      </footer>
    </div>
  )
}
