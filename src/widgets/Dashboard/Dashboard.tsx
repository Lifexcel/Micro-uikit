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
} from "../../components/Svg/index";
import { Profile } from "../Menu/types";
import { Flex } from "../../components/Flex";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import { DataType, useTable, ColumnType } from "../../components/Table";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  profile: Profile;
}

const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primary};
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
  width: 400px;
`;
const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MainBar = styled.div`
   display:block:
   align-items:center;
   justify-content:center;
   margin:10px 5px;
   box-shadow:${({ theme }) => `1px 1px 2px ${theme.colors.tertiary}`};
`;
const StyledAvatar = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;
const Address = styled.div``;
const Container = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.tertiary}`};
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  justifycontent: space-around;
  alignitems: flex-start;

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
    width: 27%;
  }
  .content-left {
    width: 70%;
    margin: 0px 10px 10px 0;

    .token-description-container {
      overflow-x: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
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
    </Container>
  );
};

const TransactionsTable = <T extends DataType>({ _columns, _data }: { _columns: ColumnType<T>[]; _data: T[] }) => {
  const { headers, rows } = useTable(_columns, _data, {
    sortable: true,
  });

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
    <div>
      <Flex justifyContent="space-between">
        <Text>Transactions</Text>
        <Text>All</Text>
      </Flex>
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
    </div>
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
    <DashboardWrapper className="dashboard">
      <DashboardHeader className="dashboard-header">
        <Flex flexDirection="row">
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
              231231k23l1k3l123l12k3
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
      <div className="dashboard-main">
        <MainBar className="dashboard-main-bar">
          <Flex justifyContent="space-between">
            <Search>
              <SearchInput type="text" inputMode="text" placeholder="Search for tokens pools and vaults" />
              <SearchButton size="sm" variant="text">
                <SearchIcon />
              </SearchButton>
            </Search>
            <Flex justifyContent="space-between">
              <Button variant="text">
                63
                <ArrowDownIcon />
              </Button>

              <Button variant="text">
                USD
                <ArrowDropDownIcon />
              </Button>
            </Flex>
          </Flex>
        </MainBar>
        <DashboardMain className="dashboard-main-content">
          <div className="content-left">
            <Flex className="token-description-container" justifyContent="space-between">
              <TokenDesc />
              <TokenDesc />
              <TokenDesc />
              <TokenDesc />
            </Flex>
            <Flex className="portfolio-container">Please hold on we are gathering your portfolio</Flex>
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
                        <StyledAssetIcon src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png" alt="asset" />{" "}
                        0.01 BNB
                      </Flex>
                    </td>
                    <td>$5.01</td>
                  </tr>
                  <tr>
                    <td>
                      <Flex alignItems="center">
                        <StyledAssetIcon src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png" alt="asset" />{" "}
                        0.01 BNB
                      </Flex>
                    </td>
                    <td>$5.01</td>
                  </tr>
                  <tr>
                    <td>
                      <Flex alignItems="center">
                        <StyledAssetIcon src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png" alt="asset" />{" "}
                        0.01 BNB
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
      </div>
    </DashboardWrapper>
  );
};
