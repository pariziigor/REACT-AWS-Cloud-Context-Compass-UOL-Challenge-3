import { AsideComponents } from "../AsideInfo/Index";
import { CardComponents } from "../CardImage/Index";
import { InfoComponents } from "../Profile/Index";

function ProfileComponent() {
  return (
    <div className="gap-8 justify-center items-center  w-full flex flex-col py-10 lg:flex-row">
      <CardComponents.Root>
        <CardComponents.Img
          src="https://i.imgur.com/jguCgC7.png"
          textName="Hello, world!"
          textInfo="Solteiro, Brasil"
        />
        <CardComponents.Button textButton="Editar meu perfil" />
      </CardComponents.Root>
      <InfoComponents.Root>
        <InfoComponents.Title name="Jubileu" />
        <InfoComponents.Msg message="uma bela mensagem da clarice lispector" />
        <InfoComponents.Emoji />
        <InfoComponents.Tags />
      </InfoComponents.Root>
      <AsideComponents.Root>
        <AsideComponents.Container>
          <AsideComponents.Link
            href="/profile"
            text="Amigos (248)"
            className="text-base text-dark-10"
          />
          <AsideComponents.Link
            href="/profile"
            text="Ver todos"
            className="text-sm text-brand-color"
          />
        </AsideComponents.Container>
        <AsideComponents.ContainerBody>
          <AsideComponents.Object
            href="/profile"
            round
            text="Fernando"
            src="https://i.imgur.com/AFJ9Uhs.png"
          />
          <AsideComponents.Object
            href="/profile"
            round
            text="Fernando"
            src="https://i.imgur.com/g00WRng.png"
          />
          <AsideComponents.Object
            href="/profile"
            round
            text="Fernando"
            src="https://i.imgur.com/zGWdEfN.png"
          />
          <AsideComponents.Object
            href="/profile"
            round
            text="Fernando"
            src="https://i.imgur.com/NCNMWMq.png"
          />
          <AsideComponents.Object
            href="/profile"
            round
            text="Fernando"
            src="https://i.imgur.com/rZ8fCOP.png"
          />
          <AsideComponents.Object
            href="/profile"
            round
            text="Fernando"
            src="https://i.imgur.com/OZzAEqY.png"
          />
          <AsideComponents.Object
            href="/profile"
            round
            text="Nanda"
            src="https://i.imgur.com/iXETVnZ.png"
          />
          <AsideComponents.Object
            href="/profile"
            round
            text="Fernando"
            src="https://i.imgur.com/NrsHF8b.png"
          />
          <AsideComponents.Object
            href="/profile"
            round
            text="Fer"
            src="https://i.imgur.com/smEE1fr.png"
          />
        </AsideComponents.ContainerBody>
      </AsideComponents.Root>
      <AsideComponents.Root>
        <AsideComponents.Container>
          <AsideComponents.Link
            href="/profile"
            text="Comunidade (42)"
            className="text-base text-dark-10"
          />
          <AsideComponents.Link
            href="/profile"
            text="Ver todos"
            className="text-sm text-brand-color"
          />
        </AsideComponents.Container>
        <AsideComponents.ContainerBody>
          <AsideComponents.Object
            href="/profile"
            text="Fernando"
            src="https://i.imgur.com/7N7C9nu.png"
          />
          <AsideComponents.Object
            href="/profile"
            text="Fernando"
            src="https://i.imgur.com/tBIGWCc.png"
          />
          <AsideComponents.Object
            href="/profile"
            text="Fernando"
            src="https://i.imgur.com/gwnknXd.png"
          />
          <AsideComponents.Object
            href="/profile"
            text="Fernando"
            src="https://i.imgur.com/DCN6mIZ.png"
          />
          <AsideComponents.Object
            href="/profile"
            text="Fernando"
            src="https://i.imgur.com/qCvbyYR.png"
          />
          <AsideComponents.Object
            href="/profile"
            text="Fernando"
            src="https://i.imgur.com/nrIosPU.png"
          />
          <AsideComponents.Object
            href="/profile"
            text="Nanda"
            src="https://i.imgur.com/GejNWt4.png"
          />
          <AsideComponents.Object
            href="/profile"
            text="Fernando"
            src="https://i.imgur.com/ROqwqw4.png"
          />
          <AsideComponents.Object
            href="/profile"
            text="Fer"
            src="https://i.imgur.com/bX3Ifjp.png"
          />
        </AsideComponents.ContainerBody>
      </AsideComponents.Root>
    </div>
  );
}

export default ProfileComponent;
