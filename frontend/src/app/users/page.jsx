"use client";

import {
  Search,
  PrimaryButton,
  EmptyState,
  ConfirmDialog,
  SideView,
} from "@/components";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import userService from "../../service/user-service";
import { ArrowIcon, BarArrowIcon } from "@/assets";
import Image from "next/image";

const UserHomePage = () => {
  const router = useRouter();
  const service = userService();

  const [data, setData] = useState(null);
  const [selected, setSelected] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [userSelected, setUserSelected] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openSideView, setOpenSideView] = useState(false);

  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await service.getAll();

        setData(response);
      } catch (err) {
        console.log(err);
        setError(err);
      }
    };

    fetchData();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const registerUser = () => {
    router.push("/users/register");
  };

  const navigateToEditScreen = ({ user }) => {
    router.push(`/users/${user.id}/update`);
  };

  const isEmpty = () => {
    return (
      <div className="h-[470px] bg-white flex justify-center mt-10 p-5">
        {EmptyState()}
      </div>
    );
  };

  const searchContent = () => {
    return (
      <div className="flex-1 items-center">
        <div className="flex-1 overflow-y-auto mt-5">
          <div className="bg-primary p-2 px-3 rounded flex justify-between">
            <span className="text-white text-[12px]">Nome</span>
            <span className="text-white text-[12px]">Ações</span>
          </div>
          {searchResult?.data.length == 0 ? (
            <div className="flex flex-col items-center mt-5 p-5 bg-white rounded h-[470px]">
              <Image
                priority={false}
                src="/images/search.png"
                width={150}
                height={150}
              />
              <div className="py-5"></div>
              <span className="text-[14px] font-bold font-manrope text-[#0B2B25] tracking-normal text-center">
                Nenhum Resultado Encontrado
              </span>
              <span className="text-[12px] font-manrope text-[#0B2B25] tracking-normal text-center">
                Não foi possível achar nenhum resultado para sua busca. Tente
                refazer a pesquisa para encontrar o que busca.
              </span>
            </div>
          ) : (
            <div className="h-[470px]">
              {searchResult?.data.map((e) => userContent({ u: e }))}
            </div>
          )}
        </div>
      </div>
    );
  };

  const userContent = ({ u }) => {
    return (
      <div
        key={u.id}
        className="p-2 px-3 rounded flex justify-between my-2 bg-white"
      >
        <span className="text-black text-[12px]">{u.name}</span>
        <div className="flex gap-x-2">
          <FontAwesomeIcon
            icon={faEye}
            size="sl"
            onClick={() => {
              setOpenSideView(true);
              setUserSelected(u);
            }}
          />
          <FontAwesomeIcon
            icon={faEdit}
            size="sl"
            onClick={() => {
              navigateToEditScreen({ user: u });
            }}
          />
          <FontAwesomeIcon
            icon={faTrashAlt}
            size="sl"
            onClick={() => {
              setSelected(u);
              openModal(true);
            }}
          />
        </div>
      </div>
    );
  };

  const content = () => {
    return (
      <div className="flex-1">
        <div className="flex-1 overflow-y-auto mt-5">
          <div className="bg-primary p-2 px-3 rounded flex justify-between">
            <span className="text-white text-[12px]">Nome</span>
            <span className="text-white text-[12px]">Ações</span>
          </div>

          <div className="mt-2 h-[470px]">
            {data?.data.map((e) => userContent({ u: e }))}
          </div>
        </div>
      </div>
    );
  };

  const fetchPagination = async (page) => {
    if (page < 1) return;

    if (page > data.meta.totalPages) return;

    try {
      const response = await service.getAll(page);
      console.log(response);

      setData(response);
      setCurrentPage(response.meta.currentPage);
    } catch (err) {
      console.log(err);
    }
  };

  const searchUsers = async (query) => {
    try {
      const response = await service.search(1, query);

      setSearchResult(response);
    } catch (err) {
      console.log(err);
    }
  };

  const footer = () => {
    return (
      <div className="flex justify-between">
        <div className="flex items-center">
          <span className="text-[10px] text-center">{`Total de itens: ${data?.meta.totalItems}`}</span>
        </div>

        <div className="flex px-5 flex items-center">
          <div>
            <span className="text-[10px]">{`Itens por página: ${data?.meta.limit}`}</span>
          </div>
          <div className="grid grid-cols-5 gap-1 flex items-center">
            <button onClick={() => fetchPagination(1)}>
              <BarArrowIcon />
            </button>
            <button onClick={() => fetchPagination(currentPage - 1)}>
              <ArrowIcon />
            </button>

            <div className="bg-blue01 px-1 py-2 rounded cursor-none text-white text-center">
              <span className="text-[12px]">{data?.meta?.currentPage}</span>
            </div>

            <button onClick={() => fetchPagination(currentPage + 1)}>
              <div className="rotate-180">
                <ArrowIcon />
              </div>
            </button>
            <button onClick={() => fetchPagination(data?.meta?.totalPages)}>
              <div className="rotate-180 ">
                <BarArrowIcon />
              </div>
            </button>
          </div>
          <div>
            <span className="text-[12px]">{`de ${data?.meta?.totalPages}`}</span>
          </div>
        </div>
      </div>
    );
  };

  const buildContent = () => {
    if (!searchResult) {
      if (!data) {
        return isEmpty();
      }

      if (data && data.data.length == 0) {
        return isEmpty();
      }
      return content();
    }

    return searchContent();
  };

  const refresh = async () => {
    try {
      const response = await service.getAll();
      setData(response);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async () => {
    try {
      await service.remove(selected.id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-4">
      <div>
        <span className="font-bold text-[24px] text-black">Usuários</span>
      </div>
      <div className="flex justify-between mt-5">
        <Search onSearch={searchUsers} />
        <PrimaryButton
          title={"Cadastrar"}
          onClick={() => {
            registerUser();
          }}
        />
      </div>
      {buildContent()}
      <ConfirmDialog
        title={"Deseja excluir?"}
        description={"O usuário será excluído."}
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={() => {
          closeModal();

          deleteUser();
          refresh();
        }}
      />

      {openSideView && (
        <SideView
          data={userSelected}
          onClose={() => setOpenSideView(false)}
          open={openSideView}
        ></SideView>
      )}
      {footer()}
    </div>
  );
};

export default UserHomePage;
