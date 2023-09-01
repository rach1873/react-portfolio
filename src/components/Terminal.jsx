import Typewriter from "typewriter-effect";

function Terminal() {
  return (
    <div className="w-8/12 h-48 border-2 border-black bg-[#fff] rounded-lg overflow-hidden">
      {/*//*header*/}
      <div className="bg-[#333] flex justify-between items-center">
        <p className="text-[#fff]">Console Window</p>
        <div className="flex">
          <div className="h-3 w-3 bg-[#0f0] rounded-full m-1"></div>
          <div className="h-3 w-3 bg-[#ff0] rounded-full m-1"></div>
          <div className="h-3 w-3 bg-[#f00] rounded-full m-1"></div>
        </div>
      </div>
      {/*//*body*/}
      <div className="w-full h-full bg-black text-[#0f0]">
        <p>
          brandonsmac:~ bsmith$
          <Typewriter
            onInit={(t) =>
              t
                .typeString(
                  "Feel free to view my projects.  If you want, you can send me an email!"
                )
                .start()
            }
          />
        </p>
      </div>
    </div>
  );
}

export default Terminal;
