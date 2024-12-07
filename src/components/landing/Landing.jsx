import Header from '../header/Header';

export const Landing = () => {

    return (
        <div id="landing" className="relative h-screen w-full flex items-center justify-center">
                <div className={`absolute inset-0 z-10`}>
                    <Header />
                </div>
        </div>
    );
};

export default Landing;
