import Header from "@/components/header/Header";
import { ModeToggle } from "@/components/modeToggle/ModeToggle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Tatuagens() {
  const cardsData = [
    {
      title: "Melhores Tattoos",
      description: "Especialista em diversos tipos de tatuagens",
      icon: (
        <svg
          width="50"
          height="50"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.53731 0.826873C7.5125 0.824392 7.4875 0.824392 7.46269 0.826873L3.96269 1.17687C3.85672 1.18747 3.76025 1.24262 3.69736 1.32857L0.699771 5.42528C0.654046 5.48627 0.62647 5.56165 0.625057 5.6434C0.625019 5.6456 0.625 5.64781 0.625 5.65001C0.625 5.65052 0.625001 5.65103 0.625003 5.65153C0.625363 5.74237 0.658021 5.82559 0.712087 5.8903L7.21042 13.7883C7.28165 13.8749 7.38789 13.925 7.5 13.925C7.61211 13.925 7.71835 13.8749 7.78958 13.7883L14.2879 5.89031C14.342 5.8256 14.3746 5.74237 14.375 5.65153C14.375 5.65103 14.375 5.65052 14.375 5.65001C14.375 5.64849 14.375 5.64697 14.375 5.64545C14.3749 5.63963 14.3747 5.63382 14.3744 5.62801C14.37 5.55219 14.3431 5.48242 14.3002 5.42527L11.3026 1.32857C11.2397 1.24262 11.1433 1.18747 11.0373 1.17687L7.53731 0.826873ZM10.925 5.27501V5.25236L10.9223 5.27501H10.925ZM10.9342 5.17498H13.1877L11.2495 2.5261L10.9342 5.17498ZM10.5707 1.88395L8.04432 1.63131L10.1747 5.21034L10.5707 1.88395ZM6.95568 1.63131L4.42931 1.88395L4.82531 5.21034L6.95568 1.63131ZM3.75046 2.5261L1.81226 5.17498H4.0658L3.75046 2.5261ZM1.79416 6.02501L6.75861 12.0587L4.22371 6.0669C4.21787 6.0531 4.21314 6.0391 4.20949 6.02501H1.79416ZM5.15055 6.02501L7.49999 12.1085L9.84943 6.02501H9.78681H5.21319H5.15055ZM10.7905 6.02501C10.7869 6.0391 10.7821 6.0531 10.7763 6.0669L8.24139 12.0587L13.2058 6.02501H10.7905ZM7.5 2.18317L9.34038 5.27501H5.65962L7.5 2.18317Z"
            fill="#facc15"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      title: "Tatuagem Personalizada",
      description: "Crie sua própria tatuagem única",
      icon: (
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            fill="#facc15"
          />
          <path
            d="M12 6.5c-3.03 0-5.5 2.47-5.5 5.5s2.47 5.5 5.5 5.5 5.5-2.47 5.5-5.5-2.47-5.5-5.5-5.5zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7.5 12 7.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z"
            fill="#facc15"
          />
        </svg>
      ),
    },
    {
      title: "Melhores cuidados",
      description: "Dicas e produtos para manter sua tatuagem",
      icon: (
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 4a2 2 0 0 0-2 2v1.17l-7.84 7.83a1.98 1.98 0 0 0 0 2.83c.78.78 2.05.78 2.83 0L9.17 15H12v3h-1c-.55 0-1 .45-1 1v2h6v-2c0-.55-.45-1-1-1h-1v-3h2.83l3.66-3.66c.78-.78.78-2.05 0-2.83L14 4.83V4c0-1.1-.9-2-2-2zm0 2c.55 0 1 .45 1 1v.17l1.41 1.41-7.83 7.83L4.17 15H12V8.83l1.41-1.41c.2-.2.2-.51 0-.71l-.88-.88c-.2-.2-.51-.2-.71 0L12 6.17V6c0-.55-.45-1-1-1s-1 .45-1 1v.17L4.17 12H4c-.55 0-1-.45-1-1s.45-1 1-1h1.17L12 5.17V6c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1z"
            fill="#facc15"
          />
        </svg>
      ),
    },
    {
      title: "Tatuagem Minimalista",
      description: "Estilos simples e elegantes para todos",
      icon: (
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"
            fill="#facc15"
          />
          <path
            d="M12.707 7.293l1.414 1.414L12 10.828l-2.121-2.121 1.414-1.414L12 8l.707-.707zm-3.121 7.879l1.414-1.414L12 13.172l2.121 2.121-1.414 1.414L12 16l-.707.707z"
            fill="#facc15"
          />
          <circle cx="12" cy="12" r="1" fill="#facc15" />
        </svg>
      ),
    },
  ];

  ////////////////////////////////

  const recognition = [
    {
      icon: (
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"
            fill="#facc15"
          />
          <path
            d="M12.707 7.293l1.414 1.414L12 10.828l-2.121-2.121 1.414-1.414L12 8l.707-.707zm-3.121 7.879l1.414-1.414L12 13.172l2.121 2.121-1.414 1.414L12 16l-.707.707z"
            fill="#facc15"
          />
          <circle cx="12" cy="12" r="1" fill="#facc15" />
        </svg>
      ),
      title: "1.500",
      description: "Clientes satisfeitos",
    },
    {
      icon: (
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"
            fill="#facc15"
          />
          <path
            d="M12.707 7.293l1.414 1.414L12 10.828l-2.121-2.121 1.414-1.414L12 8l.707-.707zm-3.121 7.879l1.414-1.414L12 13.172l2.121 2.121-1.414 1.414L12 16l-.707.707z"
            fill="#facc15"
          />
          <circle cx="12" cy="12" r="1" fill="#facc15" />
        </svg>
      ),
      title: "1.000",
      description: "Artes criadas",
    },
    {
      icon: (
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"
            fill="#facc15"
          />
          <path
            d="M12.707 7.293l1.414 1.414L12 10.828l-2.121-2.121 1.414-1.414L12 8l.707-.707zm-3.121 7.879l1.414-1.414L12 13.172l2.121 2.121-1.414 1.414L12 16l-.707.707z"
            fill="#facc15"
          />
          <circle cx="12" cy="12" r="1" fill="#facc15" />
        </svg>
      ),
      title: "10",
      description: "Anos de Experiência",
    },
    {
      icon: (
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"
            fill="#facc15"
          />
          <path
            d="M12.707 7.293l1.414 1.414L12 10.828l-2.121-2.121 1.414-1.414L12 8l.707-.707zm-3.121 7.879l1.414-1.414L12 13.172l2.121 2.121-1.414 1.414L12 16l-.707.707z"
            fill="#facc15"
          />
          <circle cx="12" cy="12" r="1" fill="#facc15" />
        </svg>
      ),
      title: "100",
      description: "Profissional",
    },
  ];

  return (
    <main className="flex-1">
      <div className="container relative">
        <section
          style={{ height: "100vh" }}
          className="mx-auto flex flex-col items-start gap-4 px-5"
        >
          <div className="flex-1 flex items-center justify-center">
            {cardsData.map((card, index) => (
              <Card
                key={index}
                className="w-[280px] h-[300px] flex justify-center flex-col p-[40px] m-4"
              >
                <div className="flex justify-start">{card.icon}</div>
                <h2 className="scroll-m-20 pb-2 text-3xl mt-1 font-semibold first:mt-0">
                  {card.title}
                </h2>
                <CardDescription>{card.description}</CardDescription>
              </Card>
            ))}
          </div>
          <div className="flex justify-center w-full mb-4">
            <Card className="w-9/12 h-[200px] flex justify-evenly items-center p-[40px] m-4">
              {recognition.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center gap-3"
                >
                  {item.icon}
                  <div className="relative">
                  <h2 className="scroll-m-20 text-3xl mt-1 font-semibold first:mt-0">
                    {item.title}{" "}
                    <span className="bottom-[12px] absolute ">
                      +
                    </span>
                  </h2>
                  </div>
                  <CardDescription>{item.description}</CardDescription>
                </div>
              ))}
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
