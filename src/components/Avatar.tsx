import styled from 'styled-components';

interface IAvatarProps {
  size: number;
  avatarKey: string | null;
  name: string;
  className?: string;
}

export default function Avatar({
  size,
  avatarKey,
  name,
  className,
}: IAvatarProps) {
  const acronym = name
    ?.split(/\s/)
    .reduce((response, word) => (response += word.slice(0, 1)), '');

  return (
    <Root size={size} className={className}>
      {avatarKey ? (
        <Image src={avatarKey} width={size} height={size} />
      ) : (
        <Name>{acronym}</Name>
      )}
    </Root>
  );
}

const Root = styled.div<{ size: number }>`
  overflow: hidden;
  border-radius: 50%;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: var(--blue);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Image = styled.img`
  object-fit: cover;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const Name = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: var(--white);
  text-transform: uppercase;
`;
