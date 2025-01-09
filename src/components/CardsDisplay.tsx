import Dot from "./Dot";

export default function CardsDisplay({ display }: { display: number[][] }) {
  return (
    <div className="mx-auto flex w-full max-w-screen-sm flex-wrap place-content-center content-start items-center gap-3 px-3 py-12 sm:p-3">
      {display.map((item, idx) => {
        return (
          <div
            key={idx}
            className="flex w-[calc(33.33%-12px)] place-content-center items-center"
          >
            {item.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex aspect-square w-1/2 place-content-center items-center backdrop-blur odd:rounded-l-lg odd:bg-white/60 even:rounded-r-lg even:bg-white/40"
                >
                  {item == 1 ? (
                    <Dot />
                  ) : item == 2 ? (
                    <div className="grid size-full grid-cols-2">
                      <Dot />
                      <div></div>
                      <div></div>
                      <Dot />
                    </div>
                  ) : item == 3 ? (
                    <div className="grid size-full grid-cols-3">
                      <Dot />
                      <div></div>
                      <div></div>
                      <div></div>
                      <Dot />
                      <div></div>
                      <div></div>
                      <div></div>
                      <Dot />
                    </div>
                  ) : item == 4 ? (
                    <div className="grid size-full grid-cols-2">
                      <Dot />
                      <Dot />
                      <Dot />
                      <Dot />
                    </div>
                  ) : item == 5 ? (
                    <div className="grid size-full grid-cols-3">
                      <Dot />
                      <div></div>
                      <Dot />
                      <div></div>
                      <Dot />
                      <div></div>
                      <Dot />
                      <div></div>
                      <Dot />
                    </div>
                  ) : (
                    <div className="grid size-full grid-cols-3 content-center">
                      <Dot />
                      <Dot />
                      <Dot />
                      <Dot />
                      <Dot />
                      <Dot />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
