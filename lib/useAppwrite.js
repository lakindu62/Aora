import { useEffect, useState } from "react";
import { Alert } from "react-native";

const useAppwrite = (fn) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fn();
      setData(response);
    } catch (error) {
      Alert.alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  //when component loads for the first time
  useEffect(() => {
    fetchData();
  }, []);

  //when we need to refetch data using refresh controls etc...
  const refetch = () => fetchData();

  return { data, isLoading, refetch };
};
export default useAppwrite;

const vv = [
  {
    $collectionId: "663bc041001a5743b201",
    $createdAt: "2024-05-09T11:53:38.681+00:00",
    $databaseId: "663bc0060006c2be6010",
    $id: "663cb941003cc7fb33a8",
    $permissions: [],
    $updatedAt: "2024-05-09T11:53:38.681+00:00",
    prompt:
      "Create a motivating AI driven video aimed at inspiring coding enthusiasts with simple language",
    thumbnail:
      "https://cloud.appwrite.io/v1/storage/buckets/660d0e59e293896f1eaf/files/660eff632e9b02fe90e3/preview?width=2000&height=2000&gravity=top&quality=100&project=660d0e00da0472f3ad52",
    title: "Get inspired to code",
    users: {
      $collectionId: "663bc029000f11d6f643",
      $createdAt: "2024-05-09T05:59:47.810+00:00",
      $databaseId: "663bc0060006c2be6010",
      $id: "663c6652003dc1a5388a",
      $permissions: [Array],
      $updatedAt: "2024-05-09T05:59:47.810+00:00",
      accountId: "663c664f0014197ed391",
      avatar:
        "https://cloud.appwrite.io/v1/avatars/initials?name=Lakindu62&project=663bbef9003a36b3539d",
      email: "Lakindu62@gmail.com",
      username: "Lakindu62",
    },
    video:
      "https://cloud.appwrite.io/v1/storage/buckets/660d0e59e293896f1eaf/files/660f004955f51e7e3212/view?project=660d0e00da0472f3ad52",
  },
  {
    $collectionId: "663bc041001a5743b201",
    $createdAt: "2024-05-09T11:54:15.566+00:00",
    $databaseId: "663bc0060006c2be6010",
    $id: "663cb967000aacc2aa7d",
    $permissions: [],
    $updatedAt: "2024-05-09T11:54:15.566+00:00",
    prompt: "Picture the future of coding with AI. Show AR VR",
    thumbnail:
      "https://cloud.appwrite.io/v1/storage/buckets/660d0e59e293896f1eaf/files/660f0294e36d80abfaa9/preview?width=2000&height=2000&gravity=top&quality=100&project=660d0e00da0472f3ad52",
    title: "How AI Shapes Coding Future",
    users: {
      $collectionId: "663bc029000f11d6f643",
      $createdAt: "2024-05-09T05:59:47.810+00:00",
      $databaseId: "663bc0060006c2be6010",
      $id: "663c6652003dc1a5388a",
      $permissions: [Array],
      $updatedAt: "2024-05-09T05:59:47.810+00:00",
      accountId: "663c664f0014197ed391",
      avatar:
        "https://cloud.appwrite.io/v1/avatars/initials?name=Lakindu62&project=663bbef9003a36b3539d",
      email: "Lakindu62@gmail.com",
      username: "Lakindu62",
    },
    video:
      "https://cloud.appwrite.io/v1/storage/buckets/660d0e59e293896f1eaf/files/660f032718759c0250ae/view?project=660d0e00da0472f3ad52",
  },
  {
    $collectionId: "663bc041001a5743b201",
    $createdAt: "2024-05-09T11:55:02.443+00:00",
    $databaseId: "663bc0060006c2be6010",
    $id: "663cb99500308a26608d",
    $permissions: [],
    $updatedAt: "2024-05-09T11:55:02.443+00:00",
    prompt:
      "Create a heartwarming video following the travels of dalmatian dog exploring beautiful Italy",
    thumbnail:
      "https://cloud.appwrite.io/v1/storage/buckets/660d0e59e293896f1eaf/files/660f08374f22dab6ed8a/preview?width=2000&height=2000&gravity=top&quality=100&project=660d0e00da0472f3ad52",
    title: "Dalmatian's journey through Italy",
    users: {
      $collectionId: "663bc029000f11d6f643",
      $createdAt: "2024-05-09T05:59:47.810+00:00",
      $databaseId: "663bc0060006c2be6010",
      $id: "663c6652003dc1a5388a",
      $permissions: [Array],
      $updatedAt: "2024-05-09T05:59:47.810+00:00",
      accountId: "663c664f0014197ed391",
      avatar:
        "https://cloud.appwrite.io/v1/avatars/initials?name=Lakindu62&project=663bbef9003a36b3539d",
      email: "Lakindu62@gmail.com",
      username: "Lakindu62",
    },
    video:
      "https://cloud.appwrite.io/v1/storage/buckets/660d0e59e293896f1eaf/files/660f093a03c20c7b2d12/view?project=660d0e00da0472f3ad52",
  },
];
