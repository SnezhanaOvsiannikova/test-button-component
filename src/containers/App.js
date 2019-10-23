import React from "react";
import Button from "../components/button/Button";

const App = () => {
  return (
    <>
      <div>
        <Button size="s" icon="fa-times" type="" text="" />
      </div>
      <br />
      <div>
        <Button size="s" icon="fa-bullhorn" type="" text="Primary" disabled />
      </div>
      <br />
      <div>
        <Button size="m" type="success" text="Success" isLoading />
      </div>
      <br />
      <div>
        <Button size="l" type="warning" text="Warning" icon="fa-bars" />
      </div>
      <br />
      <div>
        <Button size="s" type="error" text="Error" icon="fa-bars" />
      </div>
      <br />
      <div>
        <Button size="l" text="Link" link="https://www.google.com/" />
      </div>
      <br />
      <div>
        <Button size="l" text="Link" link="https://www.google.com/" isLoading />
      </div>
      <br />
      <div>
        <Button size="s" text="Anchor" link="#text-block" />
      </div>
      <br />
      <div>
        <Button
          size="m"
          text="Link"
          link="https://www.google.com/"
          disabled
          isLoading
        />
      </div>
      <br />
      <div>
        <Button size="m" text="Link" link="https://www.google.com/" disabled />
      </div>
      <div id="text-block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempor
        porttitor mi, nec ultricies libero tempus nec. Curabitur lectus velit,
        interdum ac dolor eu, ullamcorper suscipit augue. Donec elementum lorem
        est, quis egestas ex euismod at. Ut consequat erat vitae turpis
        elementum rutrum. Suspendisse sodales nisi elit, vitae mattis dolor
        vestibulum vel. Quisque gravida, enim nec laoreet congue, nisi odio
        feugiat felis, quis posuere risus magna vitae magna. Maecenas pharetra
        lectus nunc, eu sollicitudin nulla pulvinar vitae. Aenean nibh tellus,
        rutrum quis ligula non, laoreet molestie nunc. Fusce gravida mi
        tristique ultricies congue. Maecenas ac turpis quis elit aliquam
        blandit. Cras velit libero, porttitor ac tempus eget, luctus ac orci.
        Nam pretium mi in sem ullamcorper, nec scelerisque erat lobortis.
        Quisque dictum est ac felis suscipit aliquam. Nulla ut ante sit amet
        sapien tincidunt gravida. Nam placerat mattis fringilla. Fusce diam
        erat, eleifend quis nulla non, bibendum faucibus purus. Quisque vitae
        gravida eros, non aliquet leo. Aliquam faucibus auctor nunc in tempor.
        Integer pharetra tincidunt blandit. Fusce in eros sed turpis malesuada
        egestas eget nec lectus. Aliquam sed rutrum tellus. Sed a auctor orci.
        Mauris aliquam lectus quis diam consectetur, nec eleifend elit
        efficitur. Fusce in metus odio. Suspendisse id sapien et diam varius
        accumsan. In vestibulum turpis quis ornare tristique. Phasellus
        imperdiet ligula ligula, a semper risus vestibulum non. Donec at nisi
        fermentum, malesuada lacus non, feugiat massa. Integer eu dolor non
        velit suscipit vestibulum.
      </div>
    </>
  );
};

export default App;
