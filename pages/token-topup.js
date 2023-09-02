import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AppLayout } from '../components/AppLayout';
import { getAppProps } from '../utils/getAppProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function TokenTopup({ availableTokens }) {
  const handleClick = async () => {
    const result = await fetch(`/api/addTokens`, {
      method: 'POST',
    });
    const json = await result.json();
    console.log('RESULT: ', json);
    window.location.href = json.session.url;
  };

  return (
    <div className="flex flex-col items-center justify-center rounded-lg">
      <div className="text-center bg-slate-100 rounded-lg p-4 shadow-lg">
        <h4>
          You currently have{' '}
          <h1 className="block mt-2 text-center">
            <FontAwesomeIcon icon={faCoins} className="text-yellow-500 pr-1" />
            {availableTokens} tokens
          </h1>
        </h4>
        <h2>Would you like to buy more?</h2>
        <div className='flex justify-around'>
          {' '}
          <button className="btn max-w-fit" onClick={handleClick}>
            Add Tokens
          </button>
          <button className="btn  bg-slate-600 hover:bg-slate-800 max-w-fit">
           <Link href='/post/new' className='hover:no-underline'>No thanks</Link> 
          </button>
        </div>
      </div>
    </div>
  );
}

TokenTopup.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const props = await getAppProps(ctx);
    return { props };
  },
});
