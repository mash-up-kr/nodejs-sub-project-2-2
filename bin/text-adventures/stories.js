export default {
  stories: [
    {
      title: "매시업 노드 13기 (스토리1)",
      description:
        "\n때는바야흐로 2023년 3월 매시업 노드팀에 큰 바람이 불어오는데.... 어떤 바람인지 맞추시오\n",
      answers: [
        {
          title: "김건회 부팀장 -> 팀장 승진",
          description:
            "\n당신은 권력에 수하이군요! 아주 좋습니다....\n 그렇다면 당신은 김건회의 정식 하수인이 되겠습니까?\n",
          over: false,
          answers: [
            {
              title: "네, 당연히 그렇습니다.",
              description: "\n다음 기수 노드 운영진 확정입니다.\n",
              over: true,
              win: false,
            },
            {
              title: "뭐래 ㅂㅅ이",
              description:
                "\n본인만의 정체성을 갖고 계신 분이로군요. 좋습니다 다음기주 운영진 활동을 통해 본인의 역량을 힘껏 뽐내보세요\n",
              over: true,
              win: false,
            },
            {
              title: "아니요, 저는 김건회의 하수인이 되지 않겠습니다.",
              description:
                "\n올바른 선택을 하셨습니다. 축하합니다!!\n 동료를 하나 추가할 수 있습니다 추가하시겠습니까? \n",
              over: false,
              answers: [
                {
                  title: "너 내 동료가 돼라! 가라 몬스터 볼!",
                  description:
                    "\n 토스 입사에 성공하였습니다 축하합니다!\n 다음 기수 함께 운영진 활동을 진행해보세요!",
                  over: false,
                  answers: [
                    {
                      title: "정세훈",
                      description:
                        "\n 토스 입사에 성공하였습니다 축하합니다!\n 다음 기수 함께 운영진 활동을 진행해보세요!",
                      over: true,
                      win: true,
                    },
                    {
                      title: "이찬웅",
                      description:
                        "\n SK 입사에 성공하였습니다 축하합니다!\n 다음 기수 함께 운영진 활동을 진행해보세요!",
                      over: true,
                      win: true,
                    },
                    {
                      title: "이동재",
                      description:
                        "\n네이버 입사에 성공하였습니다! \n 다음 기수 함께 운영진 활동을 진행해보세요!\n ",
                      over: true,
                      win: true,
                    },
                    {
                      title: "이현광",
                      description:
                        "\n 구름에듀 입사에 성공하였습니다! \n 다음 기수 함께 운영진 활동을 진행해보세요!\n",
                      over: true,
                      win: true,
                    },
                    {
                      title: "박지원",
                      description:
                        "\n LG 입사에 성공하였습니다! \n 다음 기수 함께 운영진 활동을 진행해보세요!\n",
                      over: true,
                      win: false,
                    },
                    {
                      title: "윤서현",
                      description:
                        "\n NC 입사에 성공하였습니다! \n 다음 기수 함께 운영진 활동을 진행해보세요!\n",
                      over: true,
                      win: true,
                    },
                    {
                      title: "이은정",
                      description:
                        "\n 쿠팡 입사에 성공하였습니다! \n 다음 기수 함께 운영진 활동을 진행해보세요!\n",
                      over: true,
                      win: true,
                    },
                    {
                      title: "조혜온",
                      description:
                        "\n 구글 입사에 성공하였습니다! \n 다음 기수 함께 운영진 활동을 진행해보세요!\n",
                      over: true,
                      win: true,
                    },
                  ],
                },
                {
                  title: "동료 추가안하고 혼자 헤쳐 나가겠습니다.",
                  description:
                    "\n 모든 동료가 떠나고 노드팀에 혼자 남았습니다. \n 도와줄 사람이 없으므로 14기 노드팀 멤버로 정세훈과 김건회가 자동 추가되었습니다. \n 다른팀원들도 꼬드겨보세요 !\n",
                  over: true,
                  win: false,
                },
              ],
            },
          ],
        },
        {
          title: "정세훈 부팀장 선임",
          description:
            "\nSleepy monster! Just stay there for your entire life ....",
          over: true,
          win: false,
        },
      ],
    },
    {
      title: "여기서 여러분만의 스토리를 추가해주세요!",
      description:
        "계좌번호 933502-00-162527 국민은행으로 10,000원 입금 후 안종훈에게 연락주세요 :)",
      over: true,
      win: false,
    },
  ],
  over: false,
};
