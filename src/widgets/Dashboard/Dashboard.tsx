/* eslint-disable import/prefer-default-export */
import React from "react";
import styled from "styled-components";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text";
import {
  VerifiedIcon,
  OpenNewIcon,
  BlockIcon,
  SearchIcon,
  ArrowDropDownIcon,
  ArrowDownIcon,
  ArrowForwardIcon,
} from "../../components/Svg/index";
import { Profile } from "../Menu/types";
import { Flex } from "../../components/Flex";
import { Card } from "../../components/Card";
// import useMatchBreakpoints from "../../hooks/useMatchBreakpoints";
import { Button } from "../../components/Button";
import { DataType, useTable, ColumnType } from "../../components/Table";
// eslint-disable-next-line @typescript-eslint/no-empty-interface

interface Props {
  profile: Profile;
}

const Page = styled.div`
  margin: 10px auto;
  max-width: 300px;

  ${({ theme }) => theme.mediaQueries.xs} {
    max-width: 350px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 550px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    max-width: 850px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    max-width: 940px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    max-width: 960px;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    max-width: 1180px;
    margin: 0 0 0 10px;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchButton = styled(Button)`
  position: absolute;
  right: 5px;
`;

const SearchInput = styled(Input)`
  border-radius: 5px;
  padding-right: 70px;
  box-shadow: none;
  width: 100%;
  ${({ theme }) => `${theme.mediaQueries.md} {
   width:300px;
  }`}
`;
const DashboardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 5px;

  ${({ theme }) => `${theme.mediaQueries.md} {
    flex-direction:row;
    justify-content:space-between;
  }`}
`;
const MainBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: ${({ theme }) => `1px 1px 5px 0px ${theme.colors.tertiary}`};
  margin-bottom: 10px;
  padding: 0 10px;
  border-radius: 5px;

  ${({ theme }) => `${theme.mediaQueries.md} {
    flex-direction:row;
    justify-content:space-between;
  }`}
`;

const StyledAvatar = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;
`;
const Address = styled.div``;

const Container = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.tertiary}`};
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 5px;
  display: inline-block;
  margin: 0 1rem 0 0;

  img {
    margin: 0 10px;
    object-fit: contain;
    height: 80px;
    width: 80px;
  }
  .description {
    padding: 5px;
  }
`;

const TransactButtons = styled(Flex)`
  height: 80px;
  button {
    margin: 5px;
  }
`;

const StyledCard = styled(Card)`
  display: block;
  margin-top: 10px;
  padding: 10px;
  text-align: center;
`;

const DashboardMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: inherit;

  .portfolio-container {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    border: 2px solid ${({ theme }) => theme.colors.tertiary};
    border-radius: 5px;
  }

  .content-right {
    width: 100%;
  }

  .content-left {
    margin: 0px 10px 10px 0;
    width: inherit;

    ${({ theme }) => theme.mediaQueries.xs} {
      max-width: 350px;
    }

    ${({ theme }) => theme.mediaQueries.sm} {
      max-width: 570px;
    }

    ${({ theme }) => theme.mediaQueries.md} {
      max-width: 800px;
    }

    ${({ theme }) => theme.mediaQueries.lg} {
      max-width: 940px;
    }

    ${({ theme }) => theme.mediaQueries.xl} {
      max-width: 65%;
    }

    .token-description-container {
      overflow-x: scroll;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  ${({ theme }) => `${theme.mediaQueries.xl} {
        flex-direction:row; 
        align-items:flex-start;
        
        .content-right{
            width:100%;
            max-width:400px;
        }
        .content-left{
            width:65%;
        }
    }`}
`;
const StyledAssetTable = styled.table`
  width: 100%;
  tr {
    align-items: center;
    td {
      background-color: ${({ theme }) => theme.colors.tertiary};

      padding: 5px 15px;
      vertical-align: middle;
      align-items: center;
      border: 1px solid ${({ theme }) => theme.colors.background};
      border-collapse: collapse;
    }
  }
`;

const StyledAssetIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
`;

const TokenDesc: React.FC = () => {
  return (
    <Container className="img-desc-item">
      <Flex>
        <img
          src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201905/tiger_shroff_0.png?qMIrZn27cP8pqFXpOXoDacJphGoxa_3c&size=770:433"
          width="50px"
          height="50px"
          alt="token"
        />
        <Flex className="description" flexDirection="column" justifyContent="space-around">
          <Text>Title</Text>
          <Flex alignItems="baseline">
            <Text fontSize="18px" className="value" bold>
              1,243,423
            </Text>
            <Text fontSize="14px" ml="1">
              {" "}
              MICRO
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

const TransactionsTable = <T extends DataType>({ _columns, _data }: { _columns: ColumnType<T>[]; _data: T[] }) => {
  const { headers, rows } = useTable(_columns, _data, {
    sortable: true,
  });
  const TransactionContaner = styled.div`
    width: 100%;
    overflow-x: scroll;
  `;

  const StyledTable = styled.table`
    width: 100%;

    th {
      font-size: 16px;
      &:first-child {
        border-top-left-radius: 5px;
        border-bottom-right-radius: 5px;
        padding-left: 16px;
      }

      &:last-child {
        border-top-right-radius: 5px;
        border-bottom-left-radius: 5px;
        padding-right: 16px;
      }
    }

    th,
    td {
      border: 2px solid ${({ theme }) => theme.colors.background};
      background-color: ${({ theme }) => theme.colors.tertiary};
      padding: 8px;
      color: ${({ theme }) => theme.colors.text};
      border-collapse: collapse;

      &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.background};
      }
    }
  `;

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center">
        <Text>Transactions</Text>
        <Flex>
          <Text>All</Text>
          <ArrowForwardIcon />{" "}
        </Flex>
      </Flex>
      <TransactionContaner>
        <StyledTable>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={`header-${header?.name}`} data-testid={`column-${header.name}`}>
                  {header.label}

                  {header.sorted && header.sorted.on ? <span data-testid={`sorted-${header.name}`} /> : null}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr data-testid={`row-${row.id}`} key={row.id}>
                {row.cells.map((cell) => (
                  <td>{cell.render()}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TransactionContaner>
    </>
  );
};

export const Dashboard: React.FC<Props> = ({ profile }) => {
  const transactionColumns = [
    { name: "dir", label: "DIR" },
    { name: "id", label: "ID" },
    { name: "time", label: "TIME" },
    { name: "amount", label: "AMOUNT" },
    { name: "txhash", label: "TxHASH" },
    { name: "status", label: "STATUS" },
  ];
  const transactionData = [
    {
      dir: "Thi is first",
      id: "Thisi s second",
      time: "2342",
      amount: "23424",
      txhash: "k9sf9s77f9s7",
      status: "Completed",
    },
  ];
  return (
    <Page>
      <DashboardHeader className="dashboard-header">
        <Flex>
          <Flex flexDirection="column">
            <StyledAvatar src={profile?.image} alt="user" />
            <Text>
              Status: Verified <VerifiedIcon name="" color="success" />{" "}
            </Text>
          </Flex>
          <Text color="primary" fontSize="24px">
            @********{" "}
          </Text>
        </Flex>
        <Flex justifyContent="flex-start" alignItems="flex-start">
          <Address>
            <Text>
              k3l123l12k3
              <OpenNewIcon fontSize="14px" />
            </Text>
          </Address>
          <Button variant="text" size="sm">
            <BlockIcon />
          </Button>
          <Button variant="secondary" size="sm">
            Active
          </Button>
        </Flex>
      </DashboardHeader>
      <MainBar className="dashboard-main-bar">
        <Search>
          <SearchInput type="text" inputMode="text" placeholder="Search for tokens pools and vaults" />
          <SearchButton size="sm" variant="text">
            <SearchIcon />
          </SearchButton>
        </Search>
        <Flex>
          <Button variant="text" mr="10px">
            63
            <ArrowDownIcon />
          </Button>

          <Button variant="text">
            USD
            <ArrowDropDownIcon />
          </Button>
        </Flex>
      </MainBar>
      <DashboardMain className="dashboard-main-content">
        <div className="content-left">
          <Flex className="token-description-container" justifyContent="space-between">
            <TokenDesc />
            <TokenDesc />
            <TokenDesc />
            <TokenDesc />
            <TokenDesc />
            <TokenDesc />
            <TokenDesc />
          </Flex>
          <Flex className="portfolio-container">
            <Text>Please hold on we are gathering your portfolio</Text>
          </Flex>
          <TransactionsTable _columns={transactionColumns} _data={transactionData} />
        </div>
        <div className="content-right">
          <TransactButtons justifyContent="space-around">
            <Button variant="success" size="sm">
              Receive
            </Button>
            <Button variant="danger" size="sm">
              Send
            </Button>
          </TransactButtons>
          <StyledCard>
            <Text fontSize="24px"> Binance Smart Chain</Text>
            <Text fontSize="14px">Total Value</Text>
            <Text fontSize="16px" bold>
              $8,909.00
            </Text>
            <div>
              <Text fontSize="16px"> Assets</Text>
              <StyledAssetTable className="assets-table">
                <tr>
                  <td>
                    <Flex alignItems="center">
                      <StyledAssetIcon src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png" alt="asset" /> 0.01
                      BNB
                    </Flex>
                  </td>
                  <td>$5.01</td>
                </tr>
                <tr>
                  <td>
                    <Flex alignItems="center">
                      <StyledAssetIcon src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png" alt="asset" /> 0.01
                      BNB
                    </Flex>
                  </td>
                  <td>$5.01</td>
                </tr>
                <tr>
                  <td>
                    <Flex alignItems="center">
                      <StyledAssetIcon src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png" alt="asset" /> 0.01
                      BNB
                    </Flex>
                  </td>
                  <td>$5.01</td>
                </tr>
              </StyledAssetTable>
            </div>
            <Button variant="primary" size="sm" mt="2" type="button">
              Add Token
            </Button>
          </StyledCard>
        </div>
      </DashboardMain>
    </Page>
  );
};
