import styled from "styled-components";

const Figure = styled.figure`
  height: 32rem;
  position: relative;
  // transform: scale(1.04) translateY(-1px);
  transform-origin: top;

  &::before {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(
      to right bottom,
      var(--color-grad-1),
      var(--color-grad-2)
    );
    opacity: 0.6;
  }
`;

const Image = styled.img`
  width: 100%;
  display: block;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h1`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 20%) skewY(-6deg);
  color: #fff;
  font-weight: 700;
  font-size: 3.25rem;
  text-transform: uppercase;
  width: 50%;
  line-height: 1.95;
  text-align: center;

  span {
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    padding: 1.3rem 2rem;
    background-image: linear-gradient(
      to right bottom,
      var(--color-grad-1),
      var(--color-grad-2)
    );
  }

  @media only screen and (max-width: $bp-medium) {
    width: 70%;
  }
`;

export default function ImageView({ src, title }) {
  return (
    <Figure>
      <Image src={src} alt={title} />
      <Title>
        <span>{title}</span>
      </Title>
    </Figure>
  );
}
