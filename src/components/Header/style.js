import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: var(--gray-4);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 100vw;
    gap: 5px;

    figure{
        animation-duration: .7s;
        animation: logo 2s ease 0s 1 normal forwards;
    }

    @media (min-width: 900px){
        flex-direction: row;
        justify-content: space-between;
        padding: 10px 100px;
    }

    @keyframes logo {
	0% {
		transform: scale3d(1, 1, 1);
	}

	30% {
		transform: scale3d(1.25, 0.75, 1);
	}

	40% {
		transform: scale3d(0.75, 1.25, 1);
	}

	50% {
		transform: scale3d(1.15, 0.85, 1);
	}

	65% {
		transform: scale3d(0.95, 1.05, 1);
	}

	75% {
		transform: scale3d(1.05, 0.95, 1);
	}

	100% {
		transform: scale3d(1, 1, 1);
	}
}
`