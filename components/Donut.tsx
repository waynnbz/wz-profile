import { useSpring, animated } from '@react-spring/web';

export default function donut() {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
    to: { x: 1 },
  }));

  return (
    <div className="flex h-screen justify-star items-center bg-slate-600  ">
      <animated.div
        className="w-56 h-56 bg-red-400 rounded-3xl"
        style={{ ...springs }}
        onMouseEnter={() => {
          api.start({
            from: {
              x: 0,
            },
            to: {
              x: 300,
            },
          });
        }}
        onMouseLeave={() => {
          api.start({
            to: {
              x:0
            }
          })
        }}
      />
      {/* <animated.div
        style={{
          width: 80,
          height: 80,
          background: '#ff6d6d',
          borderRadius: 8,
        }}
      /> */}
    </div>
  );
}
