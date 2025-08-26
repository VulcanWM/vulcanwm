export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://vulcanwm.github.io/earn-grid/',
      permanent: true, // 301 redirect
    },
  };
}

export default function EarnGridRedirect() {
  return null; // page won't render
}
